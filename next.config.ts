import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Necessário para GitHub Pages
  basePath: '/4u-language',
  images: {
    unoptimized: true, // GitHub Pages não suporta otimização de imagem do Next.js
  },
};

export default nextConfig;
