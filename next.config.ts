// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/NileshAm/Portfolio/public/images/**", // Wildcard to allow any GitHub repo
      },
    ],
  },
};

module.exports = nextConfig;
