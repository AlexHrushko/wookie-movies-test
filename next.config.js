/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'dev.flixforge.com'
            },
          ],
    }
}

module.exports = nextConfig
