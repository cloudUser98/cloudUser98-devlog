import { router } from "./modules/browserHistory.js";

console.log("YA HAY TYPESCRIPT AAAAAAAAAAAA");

const new_router = router;

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

function changeColor() {
    root!.style.setProperty("--main-bg-color", "#080909");
    root!.style.setProperty("--secondary-color", "292c2f");
    root!.style.setProperty("--complementary-color", "#414756");
    root!.style.setProperty("--font-color", "#fefefe");
}


button!.addEventListener("click", test);
euler_button!.addEventListener("click", test);
theme!.addEventListener("click", changeColor);
