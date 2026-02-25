/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;