import { catchLoadedRoute } from "./modules/browserHistory.js";
catchLoadedRoute(window.location.href);
const root = document.querySelector(":root");
const theme = document.getElementById("theme");
console.log("theme button: ", theme);
function changeColor(e) {
    console.log("theme");
    if (e.target.checked) {
        root.style.setProperty("--main-bg-color", "var(--bg-dark");
        root.style.setProperty("--secondary-color", "var(--secondary-dark");
        root.style.setProperty("--complementary-color", "var(--complementary-dark");
        root.style.setProperty("--font-color", "var(--font-dark");
    }
    else {
        root.style.setProperty("--main-bg-color", "var(--bg-light");
        root.style.setProperty("--secondary-color", "var(--secondary-light");
        root.style.setProperty("--complementary-color", "var(--complementary-light");
        root.style.setProperty("--font-color", "var(--font-light");
    }
}
theme.addEventListener("change", changeColor);
