module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  // Tell Eleventy to parse front matter on njk files:
  eleventyConfig.setTemplateFormats(["njk", "md", "html"]);
  eleventyConfig.setFrontMatterParsingOptions({
    delimiters: "---",
    excerpt: false
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
