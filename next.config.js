const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");
require('dotenv').config()

module.exports = withMdxEnhanced({
  layoutPath: "pages",
  defaultLayout: true,
  rehypePlugins: [rehypePrism],
})({
  pageExtensions: ["mdx", "tsx", "ts"],
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    
    config.node = {
      fs: "empty",
    };

    return config;
  },
});
