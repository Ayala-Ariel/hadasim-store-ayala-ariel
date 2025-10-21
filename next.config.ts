/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.hidabroot.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kipa.co.il',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dirshu.co.il',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'judaica-chabad.co.il',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chabadshop.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'w2.chabad.org',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
