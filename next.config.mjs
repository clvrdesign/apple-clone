/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['upload.wikimedia.org', 'developer.apple.com'], // Add the allowed hostname
      },
};

export default nextConfig;
