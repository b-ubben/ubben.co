module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/assets/videos": "videos" });

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
