import project_euler from "project_euler";

const load_route = (path, pageLoader) => {
    // Change of the browsers path without reloading the page
    let location = window.location.hostname + path;
    window.history.pushState({}, "", path);
    
    // Executing the method that renders the page
    pageLoader();
}

const RouterObject = {
    routes: { 
        "/project_euler": project_euler,
    },
    navigate: function(path) {
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

export default RouterObject;
