/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// Required for setting up github pages
if (process.env.NEXT_PUBLIC_APOD_KEY){
  const repo = 'krittika-website'
  const assetPrefix = `/${repo}/`
  const basePath = `/${repo}`

  module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
  }
}
