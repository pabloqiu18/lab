import { applyFocusMode } from "./focusMode";

export function startNavigationListener(): void {
    document.addEventListener("yt-navigate-finish", () => {
        console.log("[YouTube Focus] Navigation detected");

        applyFocusMode();
    });

    console.log("[YouTube Focus] Navigation listener started");
}