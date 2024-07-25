/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'akcdn.detik.net.id',
            },
        ],
    },
};

export default nextConfig;
