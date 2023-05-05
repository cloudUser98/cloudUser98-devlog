import { catchLoadedRoute } from "./modules/browserHistory.js";

catchLoadedRoute(window.location.href);

const root = document.querySelector(":root") as HTMLElement | null;

const theme = document.getElementById("theme");

function changeColor(e: Event) {
    if ((e.target as HTMLInputElement).checked) {
        root!.style.setProperty("--main-bg-color", "var(--bg-dark");
        root!.style.setProperty("--secondary-color", "var(--secondary-dark");
        root!.style.setProperty("--complementary-color", "var(--complementary-dark");
        root!.style.setProperty("--font-color", "var(--font-dark");
    } else {
        root!.style.setProperty("--main-bg-color", "var(--bg-light");
        root!.style.setProperty("--secondary-color", "var(--secondary-light");
        root!.style.setProperty("--complementary-color", "var(--complementary-light");
        root!.style.setProperty("--font-color", "var(--font-light");
    }
}

theme!.addEventListener("change", changeColor);
