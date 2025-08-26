const yaml = require("js-yaml");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Copia assets statici
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  
  // Supporto per YAML
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  
  // Configura le directory
  return {
    dir: {
      input: ".",
      output: "_site",
      data: "_data"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};