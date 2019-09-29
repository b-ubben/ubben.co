module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "img" });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "inc",
      layouts: "layouts",
      data: "global"
    }
  };
};
