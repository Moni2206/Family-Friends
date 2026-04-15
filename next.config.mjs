/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "cdn4.thedogapi.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
[];
