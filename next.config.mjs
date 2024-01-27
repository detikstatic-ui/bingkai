/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // basePath: "/design/static/starter-project/preview",
  // distDir: "preview",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akcdn.detik.net.id",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**/*",
      },
    ],
  },
}

export default nextConfig
