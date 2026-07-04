import { loadSettings, setSettings, type FocusSettings } from "./settings";
import { updateFocusMode } from "./focusMode";
import { startNavigationListener } from "./observer";

async function main() {
    await loadSettings();
    updateFocusMode();

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area !== "sync") {
            return;
        }
        if (!changes.settings) {
            return;
        }
        setSettings(changes.settings.newValue as FocusSettings);
        updateFocusMode();
    });

    startNavigationListener();
}

main();