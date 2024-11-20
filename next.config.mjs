/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { protocol: 'https', hostname: 'files.skillpaddy.com'  },
        ],
        minimumCacheTTL: 60 * 60 * 24 * 30,
      },
    output: "standalone"
};

export default nextConfig;
