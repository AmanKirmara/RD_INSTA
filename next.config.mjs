/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['smvd-videos-downloader.ugo-code-studio.workers.dev'], 
      },
      env: {
        MY_API_KEY: process.env.MY_API_KEY,
      }
};

export default nextConfig;
