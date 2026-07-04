import { updateFocusMode } from "./focusMode";

export function startNavigationListener(): void {
    document.addEventListener("yt-navigate-finish", () => {
        updateFocusMode();
    });
}