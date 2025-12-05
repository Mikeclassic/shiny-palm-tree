/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@radix-ui/react-slot', 'lucide-react'],
  },
}

export default nextConfig
