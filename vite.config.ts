// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, nitro (defaults to cloudflare), componentTagger (dev),
// VITE_* env injection, @ alias, React/TanStack dedupe, error logger plugins,
// and sandbox detection. Do NOT re-add those plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Switch the deploy target to Netlify when DEPLOY_TARGET=netlify (Netlify sets this
// via netlify.toml). Locally / on Lovable this stays on the default (cloudflare).
const isNetlify = process.env.DEPLOY_TARGET === "netlify" || !!process.env.NETLIFY;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: isNetlify
    ? {
        preset: "netlify",
      }
    : undefined,
});
