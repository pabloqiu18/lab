import { setStyle, removeStyle } from "../styleManager";

const END_SCREEN_STYLE = `
.ytp-fullscreen-grid-stills-container {
    display: none !important;
}
`;

export function updateEndScreenVisibility(hidden: boolean): void {
    if (hidden) {
        setStyle("endscreen", END_SCREEN_STYLE);
    } else {
        removeStyle("endscreen");
    }
}