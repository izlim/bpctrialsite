/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig
