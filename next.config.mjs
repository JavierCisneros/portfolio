/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'ui.shadcn.com',
      },
      {
        protocol: 'https',
        hostname: 'tanstack.com',
      },
    ],
  },
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://[IP_ADDRESS]',
  ],
};

export default nextConfig;
