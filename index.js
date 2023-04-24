import RouterObject from "history";

const router = RouterObject;

const euler_button = document.getElementById("getHistory")
const button = document.getElementById("main")

const paths = window.location.pathname.split("/")
let filtered_paths = paths.filter(path => path)
const last_path = filtered_paths.pop()

// if (last_path in router) 
//    logHistory(last_path, router[last_path]);

function test() {
    router.navigate("/project_euler");
}

button.addEventListener("click", test)
// euler_button.addEventListener("click", router.navigate("/"))
