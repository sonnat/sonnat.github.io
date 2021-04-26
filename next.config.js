const withMdx = require("@next/mdx")({
  extension: /\.(md|mdx)?$/
});

/** @type {import('next/dist/next-server/server/config').NextConfig} */
const nextConfig = {
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],
  env: {
    VERSION: require("./package.json").version
  },
  trailingSlash: false,
  experimental: {
    reactStrictMode: true
  },
  future: { webpack5: true }
};

module.exports = withMdx(nextConfig);
