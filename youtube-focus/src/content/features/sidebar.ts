function getSidebar(): HTMLElement | null {
    return document.querySelector<HTMLElement>("#secondary");
}

function resizePlayer(): void {
    window.dispatchEvent(new Event("resize"));
}

export function applySidebarVisibility(hidden: boolean): void {
    const sidebar = getSidebar();

    if (!sidebar) {
        return;
    }

    sidebar.style.display = hidden ? "none" : "";

    resizePlayer();
}