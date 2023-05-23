import study from "./modules/study";
import renderPatterns from "./modules/render-patterns";
import { createRouter, route } from "simple-githubpages-spa-router";

// NOTES:
// Literlas: Constant values that are typed in the program as a part of the source code are called literals.
// Literals can be of any of the basic data types and can be divided into Integer Numerals, Floating-Point Numerals, Characters, Strings, and Boolean Values.
// Again, literals are treated just like regular variables except that their values cannot be modified after their definition.
let router = createRouter([
    {path: "/study", pageRenderer: study},
    {path: "/render-patterns", pageRenderer: renderPatterns},
],"/cloudUser98-devlog");

const systemThemeSwitch = document.getElementById("theme");

function setDarkTheme(ROOT_PSEUDOCLASS: HTMLElement) {
    ROOT_PSEUDOCLASS!.style.setProperty("--main-bg-color", "var(--bg-dark");
    ROOT_PSEUDOCLASS!.style.setProperty("--secondary-color", "var(--secondary-dark");
    ROOT_PSEUDOCLASS!.style.setProperty("--complementary-color", "var(--complementary-dark");
    ROOT_PSEUDOCLASS!.style.setProperty("--font-color", "var(--font-dark");
}

function setLightTheme(ROOT_PSEUDOCLASS: HTMLElement) {
    ROOT_PSEUDOCLASS!.style.setProperty("--main-bg-color", "var(--bg-light");
    ROOT_PSEUDOCLASS!.style.setProperty("--secondary-color", "var(--secondary-light");
    ROOT_PSEUDOCLASS!.style.setProperty("--complementary-color", "var(--complementary-light");
    ROOT_PSEUDOCLASS!.style.setProperty("--font-color", "var(--font-light");
}

function changeRootCustomProperties(e: Event) {

    // Getting the root pseudoclass element
    const ROOT_PSEUDOCLASS = document.querySelector(":root") as HTMLElement | null;

    if ((e.target as HTMLInputElement).checked) {
        setDarkTheme(ROOT_PSEUDOCLASS!)
    } else {
        setLightTheme(ROOT_PSEUDOCLASS!);
    }
}

// Adding event listeners to the DOM elements
systemThemeSwitch!.addEventListener("change", changeRootCustomProperties);

// Change theme switch status according to the default prefered system theme
