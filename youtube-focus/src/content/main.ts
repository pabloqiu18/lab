import { hideSidebar } from "./youtube";
import { startObserver } from "./observer";

console.log("[YouTube Focus] Content script loaded");

hideSidebar();

startObserver();