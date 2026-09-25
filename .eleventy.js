// .eleventy.js
const { DateTime } = require("luxon");
const registerShortcodes = require("./_11ty/shortcodes");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function(eleventyConfig) {
  registerShortcodes(eleventyConfig);

  // Footnotes: [^1] references render as superscript links to a notes list.
  // amendLibrary keeps Eleventy's own markdown-it options untouched.
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItFootnote);
    // Plain superscript numeral instead of the plugin's default "[1]".
    mdLib.renderer.rules.footnote_caption = (tokens, idx) => {
      let n = Number(tokens[idx].meta.id + 1).toString();
      if (tokens[idx].meta.subId > 0) n += ":" + tokens[idx].meta.subId;
      return n;
    };
  });
  // Copy static assets from src/assets → /assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Valid template formats
  eleventyConfig.setTemplateFormats(["njk", "md", "html"]);

  // Front matter in .njk files
  eleventyConfig.setFrontMatterParsingOptions({
    delimiters: "---",
    excerpt: false,
  });

  // Blog collection: all markdown files in src/blog
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/blog/*.md");
  });

  // Date filter using Luxon in ET
  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    if (!dateObj) return "";
    const dt =
      dateObj instanceof Date
        ? DateTime.fromJSDate(dateObj, { zone: "America/New_York" })
        : DateTime.fromISO(String(dateObj), { zone: "America/New_York" });
    return dt.isValid ? dt.toFormat(format) : "";
  });

  // Fixed-decimal number formatting, e.g. 5 -> "5.0"
  eleventyConfig.addFilter("fixed", (n, digits = 1) => {
    const num = Number(n);
    return Number.isFinite(num) ? num.toFixed(digits) : "";
  });

  // Extract first <img src="..."> from rendered HTML
  eleventyConfig.addFilter("firstImageSrc", (html) => {
    if (!html) return null;
    const m = String(html).match(/<img[^>]+src=["']([^"']+)["']/i);
    return m ? m[1] : null;
  });

  // Extract first <img alt="..."> from rendered HTML
  eleventyConfig.addFilter("firstImageAlt", (html) => {
    if (!html) return null;
    const m = String(html).match(/<img[^>]+alt=["']([^"']*)["']/i);
    return m ? m[1] : null;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
