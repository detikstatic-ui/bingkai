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
        hostname: "cdn.detik.net.id",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "cdn.cnnindonesia.com",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "editorial.femaledaily.com",
        port: "",
        pathname: "**/*",
      },
    ],
  },
}

export default nextConfig
