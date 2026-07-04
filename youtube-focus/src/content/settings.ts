export interface FocusSettings {
    hideSidebar: boolean;
    disableAutoplay: boolean;
    hideEndScreen: boolean;
}

const DEFAULT_SETTINGS: FocusSettings = {
    hideSidebar: true,
    disableAutoplay: true,
    hideEndScreen: true,
};

const SETTINGS_KEY = "settings";

let currentSettings: FocusSettings = DEFAULT_SETTINGS;

export async function loadSettings(): Promise<FocusSettings> {
    const result = await chrome.storage.local.get(SETTINGS_KEY);
    const settings = (result[SETTINGS_KEY] as FocusSettings | undefined) ?? DEFAULT_SETTINGS;
    currentSettings = settings;

    return settings;
}

export async function saveSettings(settings: FocusSettings): Promise<void> {
    currentSettings = settings;
    
    await chrome.storage.local.set({
        [SETTINGS_KEY]: settings,
    });
}

export function setSettings(settings: FocusSettings): void {
    currentSettings = settings;
}

export function getSettings(): FocusSettings {
    return currentSettings;
}