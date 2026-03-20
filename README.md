# VMG Website
## Getting started
To start the development server, run:
```bash
npx @11ty/eleventy --serve
```
It will be available at http://localhost:8080/

## Blog Article Best Practices for SEO

### Front Matter Requirements

Every blog article must include the following YAML front matter at the top of the file:

```yaml
---
title: "Your Article Title Here"
date: YYYY-MM-DD
tags:
  - blog
layout: layout.njk
description: "A concise, compelling meta description (150-160 characters recommended)"
---
```

### SEO Best Practices

#### 1. Title Optimization
- **Length**: Keep titles between 50-60 characters to avoid truncation in search results
- **Keywords**: Include primary keywords near the beginning of the title
- **Clarity**: Make titles descriptive and compelling for both search engines and readers
- **Format**: Use title case and be specific about the article's value proposition

#### 2. Meta Description
- **Length**: Aim for 150-160 characters to display fully in search results
- **Content**: Summarize the article's key value and include primary keywords naturally
- **Call-to-action**: When appropriate, hint at what readers will learn or gain
- **Uniqueness**: Each article should have a unique description

#### 3. Content Structure

**Heading Hierarchy:**
- Use a single H1 (`#`) that matches or closely relates to the title
- Use H2 (`##`) for main sections
- Use H3 (`###`) and beyond for subsections
- Maintain logical hierarchy for both readability and SEO

**Content Guidelines:**
- **Content Pillar Article**: Focus on one main topic that aligns with VMGBA's practice areas.  These articles should provide comprehensive, in-depth information, around 3000 words.
- **Satellite Articles**: 3 - 5 articles that support your content pillar article by focusing on a specific aspect or subtopic related to the content pillar.  These articles should provide more targeted, specific information, around 1000-1500 words.
- **Keyword density**: Use primary keywords naturally throughout (avoid keyword stuffing)
- **Internal links**: Link to related practice areas and other blog posts. e.g. in an article about entity selection, link to related articles about tax implications or compliance requirements.
- **External links**: Link to authoritative sources when citing information
- **Readability**: Use short paragraphs, bullet points, and clear language.  In recent years, a table of contents before the article has become more common and expected.

#### 4. Images
- Include relevant images with descriptive `alt` text
- Use `loading="lazy"` for performance optimization
- Specify width and height attributes to prevent layout shift
- Optimize image file sizes (compress before uploading)
- Use descriptive file names (e.g., `foreign-business-expansion.jpg` not `img123.jpg`)
- Use max image width of 900px (currently that is 100% width of the container). 
- Use webp or jpgs if possible.  [Tinypng](https://tinypng.com/) can help compress images.

Example:
```html
<img src="/assets/your-image.jpg" alt="Descriptive alt text for SEO and accessibility" loading="lazy">
```

#### 5. URL Structure
- File names should be lowercase and hyphen-separated
- Use descriptive names that reflect the article topic
- Keep URLs concise but meaningful
- Example: `entity-selection.md`, `foreign-expansion.md`

#### 6. Internal Linking
- Link to related practice areas at the end of articles
- Use descriptive anchor text (avoid "click here")
- Format: `[Practice Area Name](/practice-areas/practice-name/)`

Example:
```markdown
**Related practice areas:** [Start-Up Counseling](/practice-areas/startup-advisory/) · [Mergers &amp; Acquisitions](/practice-areas/mergers-acquisitions/)
```

#### 7. Content Quality Signals
- **Expertise**: Demonstrate subject matter expertise with detailed, accurate information
- **Originality**: Provide unique insights and perspectives
- **Comprehensiveness**: Cover topics thoroughly with practical examples
- **Freshness**: Keep dates current and update content when relevant
- **Formatting**: Use bold for emphasis, lists for scannability, and clear section breaks

### File Location
Place all blog articles in: `/src/blog/`

### Checklist Before Publishing
- [ ] Front matter includes all required fields
- [ ] Title is 50-60 characters and includes primary keywords
- [ ] Meta description is 150-160 characters
- [ ] H1 heading matches or relates to title
- [ ] Proper heading hierarchy (H2, H3, etc.)
- [ ] Images include alt text and are optimized
- [ ] Internal links to related content included
- [ ] File name is descriptive and lowercase with hyphens
- [ ] Content is 1,000+ words (for comprehensive articles)
- [ ] Proofread for grammar and clarity
- [ ] Date is set correctly in YYYY-MM-DD format
