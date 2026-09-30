import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));

/** Locale routing (English at root, Arabic under /ar) lives in middleware.ts. */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias["@"] = path.join(root, "src");
    return config;
  },
  poweredByHeader: false,
};
export default nextConfig;
