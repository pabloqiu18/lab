import path from 'node:path'
import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import zip from 'vite-plugin-zip-pack'
import { createManifest } from "./manifest";
import { name, version } from './package.json'

const browser =
  process.env.BROWSER === "firefox" ? "firefox" : "chrome";

export default defineConfig(({ mode }) => {
  const browser = mode === "firefox" ? "firefox" : "chrome";

  console.log("Building for:", browser);

  return {
    resolve: {
      alias: {
        "@": `${path.resolve(__dirname, "src")}`,
      },
    },

    plugins: [
      crx({
        manifest: createManifest(browser),
      }),
      zip({
        outDir: "release",
        outFileName: `youtube-focus-${browser}-${version}.zip`,
      }),
    ],

    build: {
      outDir: `dist/${browser}`,
      emptyOutDir: true,
    },

    server: {
      cors: {
        origin: [/chrome-extension:\/\//],
      },
    },
  };
});