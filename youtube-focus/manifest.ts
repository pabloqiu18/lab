import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

export function createManifest(browser: "chrome" | "firefox") {
  return defineManifest({
    manifest_version: 3,

    name: pkg.name,
    version: pkg.version,

    icons: {
      48: "public/logo.png",
    },

    action: {
      default_icon: {
        48: "public/logo.png",
      },
      default_popup: "src/popup/index.html",
    },

    content_scripts: [
      {
        js: ["src/content/main.ts"],
        matches: ["https://*/*"],
      },
    ],

    permissions: ["storage"],

    ...(browser === "firefox"
      ? {
          browser_specific_settings: {
            gecko: {
              id: "youtube-focus@pabloqiu18.github",
              data_collection_permissions: {
                required: ["none"],
              },
            },
          },
        }
      : {}),
  });
}