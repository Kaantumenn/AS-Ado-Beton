import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** `~/package-lock.json` gibi üst dizin lockfile’ı varken Turbopack’in web kökünü doğru alması */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    /** Geliştirmede `public` içi görselleri değiştirip aynı dosya adını kullanınca eski sürümün takılı kalmaması */
    minimumCacheTTL:
      process.env.NODE_ENV === "development" ? 0 : 60 * 60 * 24 * 7,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
