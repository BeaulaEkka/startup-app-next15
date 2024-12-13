// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: [
//       "avatars.githubusercontent.com",
//       "lh3.googleusercontent.com",
//       "images.pexels.com",
//       "placehold.co",
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "avatars.githubusercontent.com",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "lh3.googleusercontent.com",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "images.pexels.com",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "placehold.co",
      //   pathname: "/**",
      // },

      //or allow all
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    dangerouslyAllowSVG: true, // Enable SVG images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Secure SVG handling
  },
  // commented it out as its not working when on
  experimental: {
    // ppr: "incremental",
    // after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
