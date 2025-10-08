const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the entire styles folder
  eleventyConfig.addPassthroughCopy("_styles");
  eleventyConfig.addPassthroughCopy("_assets");
  // Set default template engine to Nunjucks

  
    eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toFormat("LLLL d, yyyy");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};