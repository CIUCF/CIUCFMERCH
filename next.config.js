/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}
const allowedImageWordPressDomain = new URL( process.env.NEXT_PUBLIC_BACKEND_URL ).hostname;

module.exports = {
  nextConfig,

images: {
  domains: [ allowedImageWordPressDomain, 'via.placeholder.com' ],
},
}
