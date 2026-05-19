/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Matches all domains and subdomains
      },
      {
        protocol: "http",
        hostname: "**", // Matches all unsecure domains
      },
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "namprokash.github.io",
  //       port: "",
  //       pathname: "/**",
  //       search: "",
  //     },
  //   ],
  // },
};

export default nextConfig;
