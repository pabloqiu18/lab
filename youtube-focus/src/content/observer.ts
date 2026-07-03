import { hideSidebar } from "./youtube";

export function startObserver(): void {
	const observer = new MutationObserver(() => {
		hideSidebar();
	});
	
	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
	
	console.log("[YouTube Focus] Observer started");
}