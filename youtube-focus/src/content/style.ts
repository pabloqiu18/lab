const STYLE_ID = "youtube-focus-style";

function getStyleElement(): HTMLStyleElement | null {
    return document.getElementById(STYLE_ID) as HTMLStyleElement | null;
}

export function updateStyles(css: string): void {
    let style = getStyleElement();

    if (!style) {
        style = document.createElement("style");
        style.id = STYLE_ID;
        document.head.appendChild(style);
    }

    style.textContent = css;
}