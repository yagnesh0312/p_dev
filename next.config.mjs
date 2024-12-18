/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', "prexakanabar.github.io", "img.icons8.com"],
    },
    output: 'export',
    basePath: '/p_dev', // Replace with your repository name
    assetPrefix: '/p_dev/',
};

export default nextConfig;
