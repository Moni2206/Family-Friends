/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placecats.com",
        // port: "",
        pathname: "/neo/**",
        // search: "",
      },

      // kan godt have flere remote patterns{
      //   protocol: "https",
      //   hostname: "placecats.com",
      //   // port: "",
      //   pathname: "/neo/**",
      //   // search: "",
      // },
    ],
  },
};

export default nextConfig;
