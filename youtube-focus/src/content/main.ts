import { loadSettings, setSettings } from "./settings";
import { applyFocusMode } from "./focusMode";
import { startNavigationListener } from "./observer";

async function main() {
    await loadSettings();
    applyFocusMode();

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area !== "sync") {
            return;
        }
        if (!changes.settings) {
            return;
        }
        setSettings(changes.settings.newValue);
        applyFocusMode();

        console.log("[YouTube Focus] Settings updated");
    });

    startNavigationListener();
}

main();