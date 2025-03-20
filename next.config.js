/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

// Required for setting up github pages
if (process.env.NEXT_PUBLIC_IS_GITHUB) {
  // const repo = 'krittika-website'
  // const assetPrefix = `/${repo}/`
  // const basePath = `/${repo}`
  // nextConfig = {
  //   assetPrefix: assetPrefix,
  //   basePath: basePath,
  //   reactStrictMode: true,
  //   swcMinify: true,
  //   trailingSlash: true,
  // }
  // console.log(repo)
}

module.exports = nextConfig;
