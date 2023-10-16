/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        // port: '',
        // pathname: '',
      },
    ],
    domains: ['drive.google.com'],
  },
}

module.exports = nextConfig
