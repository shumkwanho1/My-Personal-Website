import type { NextConfig } from "next";
import dotenv from 'dotenv'

dotenv.config()

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8090',

      },
    ],
  },
};

export default nextConfig;
