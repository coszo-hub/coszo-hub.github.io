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
FIELDS = ["date", "title", "author", "github", "image", "excerpt", "slug", "body"]


def slugify(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:60] or "post"


def gh_issues():
    out = subprocess.run(
        ["gh", "issue", "list",
         "--label", "blog-submission", "--label", "approved",
         "--state", "all", "--limit", "200",
         "--json", "number,title,body,createdAt,author"],
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
    """Paragraphs plus the Markdown people actually paste into issues:
    ![images](url), [links](url), **bold**, *italic*. GitHub photo
    attachments arrive as raw <img> tags and pass through untouched;
    an image alone in a paragraph becomes a full-width figure."""
    def inline(p):
        p = re.sub(r"!\[([^\]]*)\]\((\S+?)\)", r'<img src="\2" alt="\1" loading="lazy">', p)
        p = re.sub(r"\[([^\]]+)\]\((\S+?)\)", r'<a href="\2">\1</a>', p)
        p = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", p)
        p = re.sub(r"(?<!\*)\*([^*\n]+)\*(?!\*)", r"<em>\1</em>", p)
        return p

    out = []
    for p in (p.strip() for p in re.split(r"\n\s*\n", text or "") if p.strip()):
        p = inline(p)
        if re.fullmatch(r"<img\s[^>]*>", p):
            out.append(f'<figure class="welcome-figure">{p}</figure>')
        else:
            out.append(f"<p>{p}</p>")
    return "".join(out)


def main():
    rows = []
    for iss in gh_issues():
        f = parse_form_body(iss.get("body", ""))
        title = re.sub(r"^\[blog\]\s*", "", iss["title"], flags=re.I).strip() or iss["title"]
        gh_user = (iss.get("author") or {}).get("login", "")
        gh_name = (iss.get("author") or {}).get("name", "")
        rows.append({
            "date": f.get("date", "") or iss.get("createdAt", "")[:10],
            "title": title,
            "author": f.get("author", "") or gh_name or gh_user,
            "github": gh_user,
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
