export interface FocusSettings {
    hideSidebar: boolean;
    disableAutoplay: boolean;
    hideEndScreen: boolean;
}

const DEFAULT_SETTINGS: FocusSettings = {
    hideSidebar: true,
    disableAutoplay: true,
    hideEndScreen: false,
};

const SETTINGS_KEY = "settings";

let currentSettings: FocusSettings = DEFAULT_SETTINGS;

export async function loadSettings(): Promise<FocusSettings> {
    const result = await chrome.storage.sync.get(SETTINGS_KEY);
    currentSettings = result[SETTINGS_KEY] ?? DEFAULT_SETTINGS;

    return currentSettings;
}

export async function saveSettings(settings: FocusSettings): Promise<void> {
    currentSettings = settings;
    
    await chrome.storage.sync.set({
        [SETTINGS_KEY]: settings,
    });
}

export function setSettings(settings: FocusSettings): void {
    currentSettings = settings;
}

export function getSettings(): FocusSettings {
    return currentSettings;
}