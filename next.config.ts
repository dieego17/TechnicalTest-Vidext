// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.ytimg.com'
    ], 
  },
  env: {
    API_URL: 'https://api.example.com', 
  },
  async redirects() {
    return [
      {
        source: '/old-url', 
        destination: '/new-url', 
        permanent: true, 
      },
    ];
  },
};
