# vmg-website — Agent Guidance

Guidance for Claude when working in this repository. This is the single source of truth for what "publishing" means, the blog frontmatter schema, and the SEO standards a post must meet.

## Publish pipeline

The word "publish" can mean two different things. Disambiguate before acting.

| User says… | Meaning | Action |
| --- | --- | --- |
| "publish the site", "commit and push", "ship it", `/publish` | Deploy pending working-tree changes | Run the [`/publish`](.claude/commands/publish.md) slash command (git add / commit / push) |
| "publish this memo", "publish this article", "make this a blog post", "convert this to web-ready" (source is a `.docx` research draft) | Convert an unformatted draft into a blog-ready `.md` **and then** deploy it | Invoke the `anthropic-skills:publish-online` skill first → apply the repo adaptations below → then run `/publish` |

When in doubt, ask which one.

## `publish-online` → blog-ready adaptations

`anthropic-skills:publish-online` outputs a `{slug}-web.md` file with frontmatter inferred from existing posts. Its output usually needs three small adjustments before it's ready to commit to `src/blog/`:

1. **Drop the `author:` field.** `_includes/layout.njk` hardcodes Connor T. Godfrey as the author in the Article JSON-LD schema. A frontmatter `author:` is redundant and creates a source of drift.
2. **Force `tags:` to a single-item list `[blog]`.** Drop any topical tags the skill inferred. `_includes/layout.njk` gates the Article JSON-LD schema on `"blog" in tags` — without this, the post loses its SEO structured data.
3. **Add a body `# Title` as the first line of the body.** `_includes/layout.njk` renders `{{ content | safe }}` without auto-generating a title header. Every post needs an H1 in the body that matches the frontmatter title.

Also: rename the file to drop the `-web` suffix (final path is `src/blog/{slug}.md`).

## Blog frontmatter (canonical schema)

Every file in `src/blog/*.md` MUST have exactly this frontmatter shape:

```yaml
---
title: "Title in title case"
date: YYYY-MM-DD
tags:
  - blog
layout: layout.njk
description: "150–160 char meta description, unique per post"
---
```

Rules:

- **`tags`** is a single-item list containing `blog`. Not `[blog, founders, ...]`. Not a topical tag alone. See adaptation #2 above for why.
- **No `author` field.** See adaptation #1.
- **No `cover_image` field.** The site uses inline `<img>` tags in the body, not a frontmatter field. See "Body structure" below.

## Body structure

- Line 1 of the body: `# Title` (matches frontmatter `title`). Non-negotiable — layout.njk doesn't render the title otherwise.
- Optional line 2: hero image, e.g. `<img src="/assets/{slug}.jpg" alt="Descriptive alt for SEO and accessibility" class="blog-hero-img" loading="lazy">`. Skip if there's no per-post image.
- Section headers: H2 (`##`) for main sections, H3 (`###`) and below for subsections. Single H1 only.
- Suggested closer: `**Related practice areas:** [Name](/practice-areas/{slug}/) · [Name](/practice-areas/{slug}/)` above the disclaimer.
- Suggested final block: the italicized attorney-advertising disclaimer already used in existing posts.

## Build check

Before committing new posts, run:

```
npx @11ty/eleventy
```

Confirm the new file writes `_site/blog/{slug}/index.html` and that the built HTML contains the expected `<title>` and `<h1>`. Fix any broken internal links before pushing.

## SEO standards

Applies to every post. Author and agent both.

### Title

- 50–60 characters (search results truncate past that).
- Primary keywords near the start.
- Title case, specific about the value proposition.

### Meta description

- 150–160 characters (search results truncate past that).
- Unique per post.
- Summarize the value; include primary keywords naturally; hint at what readers will learn.

### Content strategy

- **Content pillar articles**: one main topic aligned with a VMGBA practice area, ~3,000 words, comprehensive.
- **Satellite articles**: 3–5 per pillar, focused on one subtopic, 1,000–1,500 words.
- Use primary keywords naturally throughout; do not keyword-stuff.
- A short table of contents before a long article has become expected.

### Internal linking

- Link to related practice areas at the end of every post.
- Link to other posts in the same series or on adjacent topics.
- Descriptive anchor text (never "click here").
- Format: `[Practice Area](/practice-areas/{slug}/)` and `[Related post title](/blog/{slug}/)`.

### External linking

- Link to authoritative sources when citing facts, statutes, or figures.
- Prefer primary sources (statutes, agency guidance, case law) over commentary.

### Images

- Every image needs `alt` text describing it for SEO and accessibility.
- Every image needs `loading="lazy"`.
- File names: lowercase, hyphenated, descriptive (`foreign-business-expansion.jpg`, not `IMG_1234.jpg`).
- Max 900px wide (the container's width). Compress with [TinyPNG](https://tinypng.com/) or equivalent. Prefer WebP or JPG.
- Example: `<img src="/assets/topic.jpg" alt="Descriptive alt text" class="blog-hero-img" loading="lazy">`

### URL / file naming

- File name is the URL slug. Keep it lowercase, hyphenated, descriptive.
- Examples: `entity-selection.md`, `founder-equity-splits.md`, `ny-llc-publication-requirement.md`.

## Preflight checklist (before `/publish` on a new post)

- [ ] Frontmatter matches the canonical schema exactly (title, date YYYY-MM-DD, `tags: [blog]`, `layout: layout.njk`, description).
- [ ] No `author` or `cover_image` fields.
- [ ] Body line 1 is `# Title` matching the frontmatter title.
- [ ] Heading hierarchy is single H1 → H2 → H3.
- [ ] Title 50–60 chars; description 150–160 chars.
- [ ] Related-practice-area links included where relevant.
- [ ] Any images have alt text and `loading="lazy"`.
- [ ] `npx @11ty/eleventy` builds cleanly and produces `_site/blog/{slug}/index.html`.
- [ ] Spot-check the built HTML for correct `<title>`, `<h1>`, and internal links.

## References

- Publish slash command: [`.claude/commands/publish.md`](.claude/commands/publish.md)
- Web-ready conversion skill: `anthropic-skills:publish-online` (converts `.docx` → `{slug}-web.md`; apply adaptations above)
- Site layout that renders posts: [`src/_includes/layout.njk`](src/_includes/layout.njk) — inspect this before changing frontmatter schema
- Blog collection (auto-generated by glob over `src/blog/*.md`): [`src/blog.njk`](src/blog.njk)
- Eleventy config: [`.eleventy.js`](.eleventy.js)
