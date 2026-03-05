// _11ty/shortcodes.js
// Centralized SEO shortcode — call {% seoHead title, description, tags, date %} in any layout.

const SITE_URL  = "https://vmgba.com";
const SITE_NAME = "VMG Business Advisory, PLLC";
const DEFAULT_DESC  = "VMG Business Advisory, PLLC \u2014 corporate, transactional, and SMR nuclear startup advisory services nationwide.";
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo2.png`;

/** Escape special characters for use inside HTML attribute values. */
function attr(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Generates all <head> SEO meta tags from page frontmatter.
 *
 * Frontmatter fields used:
 *   title       {string}   Page title (required — every page should have one)
 *   description {string}   Meta description (falls back to DEFAULT_DESC if absent)
 *   tags        {string[]} Eleventy tags — "blog" triggers article OG type + published_time
 *   date        {Date}     Publication date (used for article:published_time on blog posts)
 *
 * Optional overrides (also set via frontmatter, then pass as extra args or extend this fn):
 *   ogImage     {string}   Full URL to override the default OG image
 *   noindex     {boolean}  Set to true to emit "noindex, nofollow" instead
 */
function seoHead(title, description, tags, date, ogImage, noindex) {
  const page      = this.page;
  const metaTitle = title || SITE_NAME;
  const metaDesc  = description || DEFAULT_DESC;
  const canonical = `${SITE_URL}${page.url}`;
  const image     = ogImage || DEFAULT_IMAGE;
  const tagList   = Array.isArray(tags) ? tags : [];
  const isBlog    = tagList.includes("blog");
  const ogType    = isBlog ? "article" : "website";
  const robots    = noindex ? "noindex, nofollow" : "index, follow";

  const lines = [
    `<title>${attr(metaTitle)} | ${SITE_NAME}</title>`,
    `<meta name="description" content="${attr(metaDesc)}">`,
    `<meta name="robots" content="${robots}">`,
    ``,
    `<!-- Open Graph -->`,
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    `<meta property="og:title" content="${attr(metaTitle)} | ${SITE_NAME}">`,
    `<meta property="og:description" content="${attr(metaDesc)}">`,
    `<meta property="og:type" content="${ogType}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:alt" content="${SITE_NAME} logo">`,
  ];

  if (isBlog && date) {
    const dateStr = date instanceof Date
      ? date.toISOString().split("T")[0]
      : String(date).split("T")[0];
    lines.push(`<meta property="article:published_time" content="${dateStr}">`);
    lines.push(`<meta property="article:author" content="Connor T. Godfrey">`);
  }

  lines.push(
    ``,
    `<!-- Twitter Card -->`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${attr(metaTitle)} | ${SITE_NAME}">`,
    `<meta name="twitter:description" content="${attr(metaDesc)}">`,
    `<meta name="twitter:image" content="${image}">`,
    ``,
    `<!-- Canonical -->`,
    `<link rel="canonical" href="${canonical}">`,
  );

  return lines.join("\n  ");
}

module.exports = function registerShortcodes(eleventyConfig) {
  eleventyConfig.addShortcode("seoHead", seoHead);
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));
};
