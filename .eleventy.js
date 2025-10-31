module.exports = function(eleventyConfig) {
  // Passthrough copy for assets (e.g., images, logo)
  eleventyConfig.addPassthroughCopy("src/assets");

  // Treat .njk, .md, and .html as valid templates
  eleventyConfig.setTemplateFormats(["njk", "md", "html"]);

  // Enable front matter parsing in .njk files
  eleventyConfig.setFrontMatterParsingOptions({
    delimiters: "---",
    excerpt: false
  });

  // Add a collection for blog posts
  eleventyConfig.addCollection("blog", function (collection) {
    return collection.getFilteredByTag("blog");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
