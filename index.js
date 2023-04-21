import logHistory from "history"
import project_euler from "project_euler"

const button = document.getElementById("getHistory")

const paths = window.location.pathname.split("/")
const last_path = paths.pop()

const router = {
    "project_euler": project_euler
}

logHistory(last_path, project_euler[last_path]);

button.addEventListener("click", () => logHistory("project_euler", project_euler))
