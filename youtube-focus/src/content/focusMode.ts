import { getSettings } from "./settings";
import { applySidebarVisibility } from "./features/sidebar";
import { applyAutoplay } from "./features/autoplay";

export function applyFocusMode(): void {
    const settings = getSettings();

    applySidebarVisibility(settings.hideSidebar);
    applyAutoplay(settings.disableAutoplay);
}