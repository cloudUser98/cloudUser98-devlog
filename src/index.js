import { catchLoadedRoute } from "./modules/browserHistory.js";
catchLoadedRoute(window.location.href);
const systemThemeSwitch = document.getElementById("theme");
function setDarkTheme(ROOT_PSEUDOCLASS) {
    ROOT_PSEUDOCLASS.style.setProperty("--main-bg-color", "var(--bg-dark");
    ROOT_PSEUDOCLASS.style.setProperty("--secondary-color", "var(--secondary-dark");
    ROOT_PSEUDOCLASS.style.setProperty("--complementary-color", "var(--complementary-dark");
    ROOT_PSEUDOCLASS.style.setProperty("--font-color", "var(--font-dark");
}
function setLightTheme(ROOT_PSEUDOCLASS) {
    ROOT_PSEUDOCLASS.style.setProperty("--main-bg-color", "var(--bg-light");
    ROOT_PSEUDOCLASS.style.setProperty("--secondary-color", "var(--secondary-light");
    ROOT_PSEUDOCLASS.style.setProperty("--complementary-color", "var(--complementary-light");
    ROOT_PSEUDOCLASS.style.setProperty("--font-color", "var(--font-light");
}
function changeRootCustomProperties(e) {
    // Getting the root pseudoclass element
    const ROOT_PSEUDOCLASS = document.querySelector(":root");
    if (e.target.checked) {
        setDarkTheme(ROOT_PSEUDOCLASS);
    }
    else {
        setLightTheme(ROOT_PSEUDOCLASS);
    }
}
// Adding event listeners to the DOM elements
systemThemeSwitch.addEventListener("change", changeRootCustomProperties);
// Change theme switch status according to the default prefered system theme
