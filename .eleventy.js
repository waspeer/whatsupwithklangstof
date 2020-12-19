const { FontAwesomeIcon } = require('@campj/eleventy-fa-icons');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
  eleventyConfig.addNunjucksShortcode('FontAwesomeIcon', FontAwesomeIcon);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
