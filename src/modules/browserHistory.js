import project_euler from "./project_euler.js";
import Curriculum from "./curriculum.js";
import study from "./study.js";
import renderPatterns from "./render-patterns.js";
// import Notes from "./notes";
function load_default() {
    console.log("DEAFULT PAGE");
}
const router = {
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
        let location = window.location.hostname + path;
        window.history.pushState({}, "", path);
        // Executing the method that renders the page
        pageLoader();
    },
    navigate: function (path) {
        console.log("navegando a ", path);
        if (path in this.routes)
            this.load_route(path, this.routes[path]);
    }
};
export default router;
console.log(router);
window.addEventListener("hashchange", () => {
    console.log("CHANGEEEEEEEEEE", window.location.hash.replace("#", ""));
    let path = window.location.hash.replace("#", "");
    console.log("/" + path);
    router.navigate("/" + path);
});
