import project_euler from "./project_euler.js";
import curriculum from "./curriculum.js";
import Notes from "./notes.js";

function load_default() {
    console.log("DEAFULT PAGE");
}

interface RouterObject {
    routes: object;
    readonly navigate: Function;
    readonly load_route: Function;
}

export const router:RouterObject = {
    routes: { 
        "/": load_default,
        "/project_euler": project_euler,
        "/curriculum": curriculum,
        "/notes": Notes,
    },
    load_route: function(path: string, pageLoader: Function) {
        // Change of the browsers path without reloading the page
        let location = window.location.hostname + path;
        window.history.pushState({}, "", path);
    
        // Executing the method that renders the page
        pageLoader();
    },
    navigate: function(path: string) {
        if (path in this.routes)
            this.load_route(path, this.routes[path as keyof object])
    }
}

console.log(router);

window.addEventListener("hashchange", () => {
    console.log("CHANGEEEEEEEEEE", window.location.hash.replace("#", ""));
    let path = window.location.hash.replace("#", "")

    console.log("/" + path);
    router.navigate("/" + path);
});
