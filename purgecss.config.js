module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.scss"],
  css: ["./src/**/*.scss"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};
