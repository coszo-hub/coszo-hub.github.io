#!/usr/bin/env python3
"""Build data/blog.csv from approved GitHub Issues.

Lists issues carrying BOTH the `blog-submission` and `approved` labels (via the
`gh` CLI, authenticated by GH_TOKEN in the Action), parses the issue-form body,
and writes one CSV row per post. Run by .github/workflows/sync-blog.yml; the
site is then rebuilt by build_pages.py.
"""
import csv
import json
import os
import re
import subprocess

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIELDS = ["date", "title", "author", "image", "excerpt", "slug", "body"]


def slugify(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:60] or "post"


def gh_issues():
    out = subprocess.run(
        ["gh", "issue", "list",
         "--label", "blog-submission", "--label", "approved",
         "--state", "all", "--limit", "200",
         "--json", "number,title,body,createdAt"],
        capture_output=True, text=True, check=True,
    ).stdout
    return json.loads(out)


def parse_form_body(body):
    """GitHub issue forms render as '### Label\\n\\nvalue' sections."""
    fields = {}
    for m in re.finditer(r"^###\s+(.+?)\s*\n+(.*?)(?=\n###\s|\Z)", body or "", re.S | re.M):
        val = m.group(2).strip()
        if val.lower() == "_no response_":
            val = ""
        fields[m.group(1).strip().lower()] = val
    return fields


def md_to_html(text):
    paras = [p.strip() for p in re.split(r"\n\s*\n", text or "") if p.strip()]
    return "".join(f"<p>{p}</p>" for p in paras)


def main():
    rows = []
    for iss in gh_issues():
        f = parse_form_body(iss.get("body", ""))
        title = re.sub(r"^\[blog\]\s*", "", iss["title"], flags=re.I).strip() or iss["title"]
        rows.append({
            "date": f.get("date", "") or iss.get("createdAt", "")[:10],
            "title": title,
            "author": f.get("author", ""),
            "image": f.get("image url", "") or f.get("image", ""),
            "excerpt": f.get("excerpt", ""),
            "slug": f"{iss['number']}-{slugify(title)}",
            "body": md_to_html(f.get("post", "") or f.get("body", "")),
        })
    rows.sort(key=lambda r: r["date"], reverse=True)
    out_path = os.path.join(REPO_ROOT, "data", "blog.csv")
    with open(out_path, "w", newline="", encoding="utf-8") as fp:
        w = csv.DictWriter(fp, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(rows)
    print(f"Wrote {len(rows)} approved post(s) to data/blog.csv")


if __name__ == "__main__":
    main()
