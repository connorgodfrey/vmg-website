// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Passthrough copy for assets (e.g., images, logo)
  eleventyConfig.addPassthroughCopy("src/assets");

  // Treat .njk, .md, and .html as valid templates
  eleventyConfig.setTemplateFormats(["njk", "md", "html"]);

  // Enable front matter parsing in .njk files
  eleventyConfig.setFrontMatterParsingOptions({
    delimiters: "---",
    excerpt: false,
  });

  // Blog collection (posts tagged 'blog')
  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi.getFilteredByTag("blog");
  });

  // Robust date filter (Eastern time). Accepts Date or ISO string.
  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    if (!dateObj) return "";
    const dt =
      dateObj instanceof Date
        ? DateTime.fromJSDate(dateObj, { zone: "America/New_York" })
        : DateTime.fromISO(String(dateObj), { zone: "America/New_York" });
    return dt.isValid ? dt.toFormat(format) : "";
  });

// Extract first <img src="..."> from rendered content
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
