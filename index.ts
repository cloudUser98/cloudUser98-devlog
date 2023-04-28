import { router } from "./modules/browserHistory.js";

console.log("YA HAY TYPESCRIPT AAAAAAAAAAAA");

const new_router = router;

const euler_button = document.getElementById("getHistory")
const button = document.getElementById("main")

const paths = window.location.pathname.split("/")
let filtered_paths = paths.filter(path => path)
const last_path = filtered_paths.pop()

console.log("EEEEEEEEEEE", router.routes)
// if (last_path && last_path in router.routes) 
//     logHistory(last_path, router[last_path]);

function test() {
    router.navigate("/project_euler");
}

button!.addEventListener("click", test)
euler_button!.addEventListener("click", test)
