export function hideSidebar(): void {
	const sidebar = document.querySelector<HTMLElement>("#secondary");
	
	if (!sidebar) {
		return;
	}
	
	if (sidebar.style.display === "none") {
		return;
	}
	
	sidebar.style.display = "none";
	window.dispatchEvent(new Event("resize"));
	console.log("[YouTube Focus] Sidebar hidden");
}