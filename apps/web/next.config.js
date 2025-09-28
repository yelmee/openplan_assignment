/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // new URL("https://picsum.photos/**"),
      // new URL("https://unsplash.com/**"),
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
