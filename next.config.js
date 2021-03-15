const withMdx = require("@next/mdx")({
  extension: /\.(md|mdx)?$/
});

const nextConfig = {
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],
  env: {
    VERSION: require("./package.json").version
  },
  trailingSlash: false,
  experimental: {
    reactStrictMode: true
  }
};

module.exports = withMdx(nextConfig);
