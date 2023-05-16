import project_euler from "./project_euler.js";
import Curriculum from "./curriculum.js";
import study from "./study.js";
import renderPatterns from "./render-patterns.js";
import CONFIG from "./../routerconfig.js";
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
// Revisar porque esta ruta funciona aunque fisicamente este niveles arriba
//fetch("./routerconfig.json") 
//    .then(response => response.json())
//    .then(object => {let test = object.DEFAULT_HOST_PATH})
//
// La idea de usar fetch esta deprecada pero seria interesante explorarla mas
// a fondo
export const router = {
    DEFAULT_HOST_PATH: CONFIG.DEFAULT_HOST_PATH,
    routes: {
        "/": () => window.location.pathname = router.DEFAULT_HOST_PATH + "/",
        "/project_euler": project_euler,
        "/curriculum": Curriculum,
        "/study": study,
        "/render-patterns": renderPatterns,
    },
    load_route: function (path, pageLoader) {
        // Change of the browsers path without reloading the page
        //let location_paths = window.location.pathname;
        //console.log("Paths before split: ", location_paths, location_paths.length);
        //let paths_lol = location_paths.split("/");
        //let paths = location_paths.split("/", 2);
        //let url_start = "";
        // paths[1] && url_start = "/";    why this does not work?
        //paths[1] && (url_start = "/");
        // let navigation_path = this.DEFAULT_HOST + "path";
        window.history.pushState({}, "", this.DEFAULT_HOST_PATH + path);
        // Executing the method that renders the page
        pageLoader();
    },
    navigate: function (path) {
        console.log("navegando a ", path);
        if (path in this.routes) {
            this.load_route(path, this.routes[path]);
        }
        else {
            console.log("NO ENCONTRO LA PAGINA");
        }
    }
};
window.addEventListener("hashchange", () => {
    let path = window.location.hash.replace("#", "");
    console.log("LOOOOOOOOOOL", path);
    // Preventing rendering of route if the path is a normal hash route
    if (path.includes("/"))
        router.navigate(path);
});
