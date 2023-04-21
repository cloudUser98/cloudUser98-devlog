import logHistory from "history"
import project_euler from "project_euler"

const button = document.getElementById("getHistory")

const paths = window.location.pathname.split("/")
let filtered_paths = paths.filter(path => path)
const last_path = filtered_paths.pop()

const router = {
    "project_euler": project_euler
};

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA", last_path);
if (last_path in router) 
    logHistory(last_path, router[last_path]);

button.addEventListener("click", () => logHistory("project_euler", project_euler))
