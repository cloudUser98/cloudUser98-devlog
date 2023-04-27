import project_euler from "./project_euler.js";
import curriculum from "./curriculum.js";


const load_route = (path, pageLoader) => {
    // Change of the browsers path without reloading the page
    let location = window.location.hostname + path;
    window.history.pushState({}, "", path);
    
    // Executing the method that renders the page
    pageLoader();
}

function load_default() {
    console.log("DEAFULT PAGE");
}

const RouterObject = {
    routes: { 
        "/": load_default,
        "/project_euler": project_euler,
        "/curriculum": curriculum,
    },
    navigate: function(path) {
        if (path in this.routes)
            load_route(path, this.routes[path])
    }
}

console.log(RouterObject);

function Router() {

    const routes = {
        "/project_euler": project_euler,
    };

    const navigate = (path) => {
        load_route(path, routes[path])
    };

    this.navigate = navigate;
};

window.addEventListener("hashchange", () => {
    console.log("CHANGEEEEEEEEEE", window.location.hash.replace("#", ""));
    let path = window.location.hash.replace("#", "")

    console.log("/" + path);
    RouterObject.navigate("/" + path);
});

export default RouterObject;
