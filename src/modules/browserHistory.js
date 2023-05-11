import project_euler from "./project_euler.js";
import Curriculum from "./curriculum.js";
import study from "./study.js";
import renderPatterns from "./render-patterns.js";
// import Notes from "./notes";
function load_default() {
    console.log("DEAFULT PAGE");
}
export function catchLoadedRoute(window_location) {
    // Revisar porque url = url.split("?"); da error
    // Getting the requested path for the page load
    // by splitting the browser's URL and getting the values after the "?" symbol
    let url = window_location.split("?")[1];
    console.log("requested paths: ", url);
    if (!url)
        return; // if there is no "?" symbol in the URL the page won't be loaded
    let paths_to_load = [];
    let path = "";
    for (let i = 0; i < url.length; i++) {
        let char = url.charAt(i);
        let next_char = url.charAt(i + 1);
        char === "/" ? path = "/" : path += char;
        console.log("path: ", path, " and the next character is: ", next_char);
        if (next_char === "/" || next_char === '')
            paths_to_load.push(path);
    }
    console.log("Array of paths to load: ", paths_to_load);
    router.navigate(paths_to_load[0]);
}
export const router = {
    routes: {
        "/": load_default,
        "/project_euler": project_euler,
        "/curriculum": Curriculum,
        // "/notes": Notes,
        "/study": study,
        "/render-patterns": renderPatterns,
    },
    load_route: function (path, pageLoader) {
        // Change of the browsers path without reloading the page
        let location_paths = window.location.pathname;
        console.log("Paths before split: ", location_paths, location_paths.length);
        let paths_lol = location_paths.split("/");
        let paths = location_paths.split("/", 2);
        console.log("paths: ", paths_lol);
        console.log("paths: ", paths);
        let url_start = "";
        // paths[1] && url_start = "/";    why this does not work?
        paths[1] && (url_start = "/");
        window.history.pushState({}, "", url_start + paths[1] + path);
        // Executing the method that renders the page
        pageLoader();
    },
    navigate: function (path) {
        console.log("navegando a ", path);
        if (path in this.routes)
            this.load_route(path, this.routes[path]);
    }
};
console.log(router);
window.addEventListener("hashchange", () => {
    console.log("CHANGEEEEEEEEEE", window.location.hash.replace("#", ""));
    let path = window.location.hash.replace("#", "");
    console.log(path);
    router.navigate(path);
});
