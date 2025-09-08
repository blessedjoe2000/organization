/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "76yw7v2l2z.ufs.sh",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
