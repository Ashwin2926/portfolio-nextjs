/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // fixed comparison
const nextConfig = {
    basePath: isProd ? '/portfolio-nextjs' : '', // removed trailing slash
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
