import project_euler from "./project_euler.js";
import Curriculum from "./curriculum.js";
import study from "./study.js";
import renderPatterns from "./render-patterns.js";
// import Notes from "./notes";

function load_default() {
    console.log("DEAFULT PAGE");
}

interface RouterObject {
    routes: object;
    readonly navigate: Function;
    readonly load_route: Function;
}

const router:RouterObject = {
    routes: { 
        "/": load_default,
        "/project_euler": project_euler,
        "/curriculum": Curriculum,
        // "/notes": Notes,
        "/study": study,
        "/render-patterns": renderPatterns,
    },
    load_route: function(path: string, pageLoader: Function) {
        // Change of the browsers path without reloading the page
        let host = window.location.hostname;
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
    navigate: function(path: string) {
        console.log("navegando a ", path);
        if (path in this.routes)
            this.load_route(path, this.routes[path as keyof object])
    }
}

export default router;

console.log(router);

window.addEventListener("hashchange", () => {
    console.log("CHANGEEEEEEEEEE", window.location.hash.replace("#", ""));
    let path = window.location.hash.replace("#", "")

    console.log(path);
    router.navigate(path);
});
