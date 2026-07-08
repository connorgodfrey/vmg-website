---
description: Stage, commit, and push all working-tree changes to publish the site.
---

Publish pending changes to the vmg-website repository. See [`CLAUDE.md`](../../CLAUDE.md) for the full publish pipeline, the blog frontmatter schema, and the SEO standards. **If the user's request is to convert an unformatted `.docx` memo into a blog post, this slash command is not the right entry point — invoke the `anthropic-skills:publish-online` skill first, apply the repo adaptations documented in CLAUDE.md, then run `/publish` to deploy.**

Steps:

1. Run `git status` and `git diff` to see what has changed.
2. If there are no changes, tell the user "Nothing to publish — working tree is clean." and stop.
3. **Blog-post preflight.** If any staged or unstaged file is a new `src/blog/*.md`, verify each against the canonical schema in CLAUDE.md:
   - Frontmatter has `title`, `date` (YYYY-MM-DD), `tags: [blog]`, `layout: layout.njk`, `description`.
   - No `author` or `cover_image` field.
   - Body line 1 is `# Title` matching the frontmatter title.
   - `npx @11ty/eleventy` builds cleanly and the post writes `_site/blog/{slug}/index.html` with the expected `<title>` and `<h1>`.
   Fix any deviations before proceeding. If the file appears to be raw `publish-online` output (still has `-web` in the name, has an `author:` field, or has topical tags instead of `[blog]`), apply the adaptations from CLAUDE.md before committing.
4. Draft a concise commit message that reflects what actually changed. Focus on the *why* when it isn't obvious from the diff. Do not use generic messages like "Update site" or "Describe what you changed."
5. Stage the specific files that changed (avoid `git add -A`; add by path so nothing unexpected sneaks in).
6. Create the commit. If the message contains only shell-safe characters, use a HEREDOC:
   ```
   git commit -m "$(cat <<'EOF'
   <your commit message>

   Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
   EOF
   )"
   ```
   If the message contains characters that would break the shell quote (single apostrophes inside the body, for example), write the message to the scratchpad and use `git commit -F <path>` instead.
7. Push to the remote with `git push`.
8. Report the commit SHA and one-line summary of what was published. If new blog posts landed, include their live URLs (`https://vmgba.com/blog/{slug}/`).

If the user passed arguments to `/publish`, treat them as the intended commit message (still add the Co-Authored-By trailer).
