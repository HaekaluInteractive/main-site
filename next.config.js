/** @type {import('next').NextConfig} */
// Configure basePath and assetPrefix from environment so exported HTML
// references assets with the repository path when deployed to GitHub Pages.
const rawBase = process.env.BASE_PATH || '/main-site'
const normalize = (p) => {
  if (!p) return undefined
  return p.startsWith('/') ? p : `/${p}`
}
const basePath = normalize(rawBase)
const assetPrefix = process.env.ASSET_PREFIX || basePath

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  output: 'export',
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
