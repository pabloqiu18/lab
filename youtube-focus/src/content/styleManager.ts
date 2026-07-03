const STYLE_ID = "youtube-focus-styles";

const styles = new Map<string, string>();

function getStyleElement(): HTMLStyleElement {
    let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;

    if (!style) {
        style = document.createElement("style");
        style.id = STYLE_ID;
        document.head.appendChild(style);
    }

    return style;
}

function renderStyles(): void {
    const style = getStyleElement();

    style.textContent = [...styles.values()].join("\n");
}

export function setStyle(name: string, css: string): void {
    styles.set(name, css);
    renderStyles();
}

export function removeStyle(name: string): void {
    styles.delete(name);
    renderStyles();
}