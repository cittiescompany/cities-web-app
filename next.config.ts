import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static export
  trailingSlash: true,  // Optional: Adds trailing slashes for better static routing
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      { protocol: "https", hostname: "www.bhg.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      {
        protocol: "https",
        hostname: "citties.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;