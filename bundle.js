'use strict';

function project_euler() {
    // Getting the root element of the document
    const root = document.getElementById("root");
    root.innerHTML = "";
    // Creating the new elemenets for the document
    const header = document.createElement("h1");
    const body = document.createElement("div");
    const text = document.createElement("p");
    header.innerHTML = "PROJECT EULER";
    text.innerHTML = "Aqui existiran mis avances en el proyecto Euler";
    root.appendChild(header);
    root.appendChild(body);
    body.appendChild(text);
}

function Curriculum() {
    const parser = new DOMParser();
    let html = `
        <div>
            HOLAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
    `;
    const created_document = parser.parseFromString(html, "text/html");
    let root = document.getElementById("content");
    //
    // We erase all the childs from the root node
    root.innerHTML = "";
    // root.appendChild(created_document);
    // We can't do this beacuse a "document" node cant be appended as a child
    root.appendChild(created_document.documentElement);
}

// import Notes from "./notes";
function load_default() {
    console.log("DEAFULT PAGE");
}
const router = {
    routes: {
        "/": load_default,
        "/project_euler": project_euler,
        "/curriculum": Curriculum
        // "/notes": Notes,
    },
    load_route: function (path, pageLoader) {
        window.history.pushState({}, "", path);
        // Executing the method that renders the page
        pageLoader();
    },
    navigate: function (path) {
        if (path in this.routes)
            this.load_route(path, this.routes[path]);
    }
};
console.log(router);
window.addEventListener("hashchange", () => {
    console.log("CHANGEEEEEEEEEE", window.location.hash.replace("#", ""));
    let path = window.location.hash.replace("#", "");
    console.log("/" + path);
    router.navigate("/" + path);
});

console.log("YA HAY TYPESCRIPT AAAAAAAAAAAA");
const euler_button = document.getElementById("getHistory");
const button = document.getElementById("main");
const paths = window.location.pathname.split("/");
let filtered_paths = paths.filter(path => path);
filtered_paths.pop();
console.log("EEEEEEEEEEE", router.routes);
// if (last_path && last_path in router.routes) 
//     logHistory(last_path, router[last_path]);
function test() {
    router.navigate("/project_euler");
}
button.addEventListener("click", test);
euler_button.addEventListener("click", test);
