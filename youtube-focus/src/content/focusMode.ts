import { getSettings } from "./settings";
import { updateSidebarVisibility } from "./features/sidebar";
import { updateAutoplayVisibility } from "./features/autoplay";
import { updateEndScreenVisibility } from "./features/endscreen";

export function updateFocusMode(): void {
    const settings = getSettings();

    updateSidebarVisibility(settings.hideSidebar);
    updateAutoplayVisibility(settings.disableAutoplay);
    updateEndScreenVisibility(settings.hideEndScreen);
}