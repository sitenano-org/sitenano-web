/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sitenano-web',
  assetPrefix: '/sitenano-web/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
