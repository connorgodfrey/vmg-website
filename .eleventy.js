// .eleventy.js (root of your project)
module.exports = function(eleventyConfig) {
  // Pass through entire assets folder (relative to project root) into output
  eleventyConfig.addPassthroughCopy("src/assets");

  // (Optional) ensure copy behavior during local dev serve
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Let Eleventy process .njk, .md, and also copy .css/.js if those files are in src
  eleventyConfig.setTemplateFormats(["njk", "md", "css", "js", "jpg", "png"]);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
