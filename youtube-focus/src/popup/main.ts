import { loadSettings, saveSettings, type FocusSettings } from "../content/settings";
import './style.css'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <main class="popup">
        <h1>YouTube Focus</h1>

        <label>
            <input type="checkbox" id="hideSidebar">
            Hide sidebar
        </label>

        <label>
            <input type="checkbox" id="disableAutoplay">
            Disable autoplay
        </label>

        <label>
            <input type="checkbox" id="hideEndScreen">
            Hide end screen
        </label>
    </main>
`;

initialize();

async function initialize() {
    const settings = await loadSettings();

    bindCheckbox("hideSidebar", settings);
    bindCheckbox("disableAutoplay", settings);
    bindCheckbox("hideEndScreen", settings);
}

function bindCheckbox(
    id: keyof FocusSettings,
    settings: FocusSettings
) {
    const checkbox = document.getElementById(id) as HTMLInputElement;

    checkbox.checked = settings[id];

    checkbox.addEventListener("change", async () => {
        settings[id] = checkbox.checked;

        await saveSettings(settings);

        console.log("[YouTube Focus] Saved settings:", settings);
    });
}