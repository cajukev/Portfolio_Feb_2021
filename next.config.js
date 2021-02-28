const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
  target:"serverless"
  
}

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  
], nextConfig);