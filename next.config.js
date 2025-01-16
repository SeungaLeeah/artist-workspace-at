module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['example.com'],
    },
    env: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
};
