/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    qualities: [100, 75],
  },
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Enable Partial Prerendering
  cacheComponents: true,
  // Reduce bundle size and improve performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-icons', '@tabler/icons-react'],
    optimizeCss: true,
  },
  // Improve loading performance
  poweredByHeader: false,
  reactStrictMode: true,
  // Add security headers for best practices
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
}

export default nextConfig

