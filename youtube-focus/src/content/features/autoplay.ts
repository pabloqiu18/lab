import { setStyle, removeStyle } from "../styleManager";

const AUTOPLAY_STYLE = `
.ytp-autonav-toggle {
    display: none !important;
}
`;

function getAutoplayButton(): HTMLButtonElement | null {
    return document.querySelector<HTMLButtonElement>(
        ".ytp-autonav-toggle"
    );
}

function isAutoplayEnabled(): boolean {
    return (
        document
            .querySelector(".ytp-autonav-toggle-button")
            ?.getAttribute("aria-checked") === "true"
    );
}

export function updateAutoplayVisibility(disable: boolean): void {
    if (disable) {
        setStyle("autoplay", AUTOPLAY_STYLE);
    } else {
        removeStyle("autoplay");
    }

    const button = getAutoplayButton();

    if (!button) {
        return;
    }

    const enabled = isAutoplayEnabled();

    if (disable && enabled) {
        button.click();
    } else if (!disable && !enabled) {
        button.click();
    }
}