import type { NextConfig } from "next";
import dotenv from 'dotenv'

dotenv.config()

const nextConfig: NextConfig = {
  images: {
    domains: ['s3.ap-southeast-1.amazonaws.com'],
  },
};

export default nextConfig;
