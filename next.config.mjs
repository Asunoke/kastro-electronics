import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Ajoute l'alias @ pour ton dossier racine
    config.resolve.alias['@'] = path.resolve('./');
    return config;
  },
};

export default nextConfig;
