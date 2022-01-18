const withPwa = require("next-pwa");
const withMdx = require("@next/mdx")({
  extension: /\.(md|mdx)?$/
});

/** @type {import('next/dist/next-server/server/config').NextConfig} */
const nextConfig = {
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],
  reactStrictMode: true,
  trailingSlash: false,
  pwa: {
    dest: "public",
    dynamicStartUrl: false,
    disable: process.env.NODE_ENV === "development"
  }
};

module.exports = withMdx(withPwa(nextConfig));
