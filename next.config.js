
require("dotenv").config();

module.exports = {
  pageExtensions: ["tsx", "ts"],
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
        {
          test: /\.md$/,
          use: "raw-loader",
        },
      ]
    );

    webpack.resolve = {
      fallback: {
        fs: true,
      },
    };

    return config;
  },
}
