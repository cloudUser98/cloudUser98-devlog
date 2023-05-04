import router from "./modules/browserHistory.js";

console.log("YA HAY TYPESCRIPT AAAAAAAAAAAA");

console.log(router);

const root = document.querySelector(":root") as HTMLElement | null;
const styles = getComputedStyle(root!);

const euler_button = document.getElementById("getHistory");
const button = document.getElementById("main");
const theme = document.getElementById("theme");

const paths = window.location.pathname.split("/")
let filtered_paths = paths.filter(path => path)
const last_path = filtered_paths.pop()

console.log("EEEEEEEEEEE", router.routes)
// if (last_path && last_path in router.routes) 
//     logHistory(last_path, router[last_path]);

function test() {
    router.navigate("/project_euler");
}

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


button!.addEventListener("click", test);
euler_button!.addEventListener("click", test);
theme!.addEventListener("change", changeColor);
