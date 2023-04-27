import RouterObject from "./modules/browserHistory.js";
import { Octokit, App } from "https://cdn.skypack.dev/octokit";

const octokit = new Octokit({
    auth: ""
});

let result = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
  owner: "cloudUser98",
  repo: "simplenote-personal-notes",
  path: "# String thrutiness in Python.md",
  headers: {
      accept: "application/vnd.github.html"
  }
});

let text = atob(result.data.content);
console.log("octokit result: ", result);
console.log("AAAAAa: ", text);

let html = await octokit.request('POST /markdown', {
  text: text,
  headers: {
    // 'X-GitHub-Api-Version': '2022-11-28'
  }
})

console.log(html)

const root = document.getElementById("root");
//root.innerHTML = html

const router = RouterObject;

const euler_button = document.getElementById("getHistory")
const button = document.getElementById("main")

button.innerHTML = html.data

const paths = window.location.pathname.split("/")
let filtered_paths = paths.filter(path => path)
const last_path = filtered_paths.pop()

console.log("EEEEEEEEEEE", router.routes)
if (last_path in router.routes) 
    logHistory(last_path, router[last_path]);

function test() {
    router.navigate("/project_euler");
}

button.addEventListener("click", test)
euler_button.addEventListener("click", test)
