/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// .mp4 video
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};