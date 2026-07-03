import { getSettings } from "./settings";
import { applySidebarVisibility } from "./features/sidebar";

export function applyFocusMode(): void {
    const settings = getSettings();

    applySidebarVisibility(settings.hideSidebar);
}