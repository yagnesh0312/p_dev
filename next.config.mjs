/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', "raw.githubusercontent.com", "img.icons8.com"],
        unoptimized: true,
    },
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,

};

export default nextConfig;
