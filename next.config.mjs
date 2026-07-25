import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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

const withMDX = createMDX({});

export default withMDX(nextConfig);
