// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets from src/assets → /assets
  eleventyConfig.addPassthroughCopy("src/assets");

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

  // Extract first <img src="..."> from rendered HTML
  eleventyConfig.addFilter("firstImageSrc", (html) => {
    if (!html) return null;
    const m = String(html).match(/<img[^>]+src=["']([^"']+)["']/i);
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
