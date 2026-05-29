/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname:
          "xykvbxrarpatdacgsmxr.supabase.co",
      },
    ],
  },
};

export default nextConfig;