/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  basePath: '/Interviewquestions',
  assetPrefix: '/Interviewquestions/',
}

module.exports = nextConfig
