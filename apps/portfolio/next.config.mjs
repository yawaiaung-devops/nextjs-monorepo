/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui', "@repo/hooks","@turbo-with-tailwind/design-system",
        "@turbo-with-tailwind/ui",]
};

export default nextConfig;
