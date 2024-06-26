import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "images.remotePatterns",
      "freeimage.host",
      "iili.io",
      "ideogram.ai",
      "e0.pxfuel.com",
    ],
  },
};

export default withNextVideo(nextConfig);
