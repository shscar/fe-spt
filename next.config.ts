import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "be-sporton.agunacourse.com",
        pathname: "/uploads/**"
      }
    ]
  }
};

// const nextConfig = {
//   webpack: (config) => {
//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300,
//     }
//     return config
//   },
// }

export default nextConfig;
