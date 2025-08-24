/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Disable optimization to fix loading issues
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.iptvlifetime.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Compression for mobile
  compress: true,
  // Production optimizations
  experimental: {
    optimizeCss: false, // Disable to avoid potential issues
  },
}

module.exports = nextConfig