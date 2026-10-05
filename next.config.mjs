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

// Expose the base path to client code so /public assets resolve from nested routes.
nextConfig.env = { NEXT_PUBLIC_BASE_PATH: nextConfig.basePath };

export default nextConfig;
