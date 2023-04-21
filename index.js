import logHistory from "history"
import project_euler from "project_euler"

const button = document.getElementById("getHistory")

button.addEventListener("click", logHistory("/project_euler", project_euler))
