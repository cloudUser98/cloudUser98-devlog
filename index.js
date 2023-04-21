import logHistory from "history"
import project_euler from "project_euler"

const euler_button = document.getElementById("getHistory")
const button = document.getElementById("main")

const paths = window.location.pathname.split("/")
let filtered_paths = paths.filter(path => path)
const last_path = filtered_paths.pop()

function create_router() {
    return {
        navigate: (path) => logHistory(path, this[path]),
        load_default: () => {
            fetch("https://clouduser98.github.io/luis-escobedo/index.html")
                .then(response => response.text())
                .then(html => {
                    document.getElementById("root").innerHTML = html;
                })
        },
        "/": this.load_default,
        "/project_euler": project_euler
    }
};

const router = create_router()

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA", last_path);
if (last_path in router) 
    logHistory(last_path, router[last_path]);

button.addEventListener("click", router.navigate("/project_euler"))
euler_button.addEventListener("click", router.navigate("/"))
