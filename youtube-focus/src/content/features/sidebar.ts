import { setStyle, removeStyle } from "../styleManager";

const SIDEBAR_STYLE = `
#secondary {
    display: none !important;
}
`;

function resizePlayer(): void {
    window.dispatchEvent(new Event("resize"));
}

export function updateSidebarVisibility(hidden: boolean): void {
    if (hidden) {
        setStyle("sidebar", SIDEBAR_STYLE);
    } else {
        removeStyle("sidebar");
    }

    resizePlayer();
}