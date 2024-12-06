/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.dribbble.com'], // Add external image domains here
    },
    webpack: (config) => {
      config.cache = false; // Disables caching for troubleshooting purposes
      return config;
    },
  };
  
  export default nextConfig;
  