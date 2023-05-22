const content$1 = document.getElementById("content");
const __last_content_column$1 = document.getElementById("last-content-column");
function study() {
    content$1.innerHTML = `
        <h1>Temas de estudio</h1>
        <p>
            Aqui iran todos los temas de estudio que estoy tomando por el momento.
        </p>
    `;
    load_indexes$1();
}
function load_indexes$1() {
    console.log("loading indexes");
    __last_content_column$1.innerHTML = `
        <ul class="index-menu">
            <h3>Content table</h3>
            <li class="index-menu-item">
                <a class="hyperlink-container" href="#/render-patterns">
                    Patrones de renderizado para paginas web
                </a>
            </li>
        </ul>
    `;
}

const content = document.getElementById("content");
const __last_content_column = document.getElementById("last-content-column");
function renderPatterns() {
    content.innerHTML = `
        <h1>Patrones de renderizado para aplicaciones web</h1>
        <p>
            Este apartado sera exclusivo para apuntes acerca del tema de patrones de renderizado
            para aplicaciones web. Mi interes sobre este tema nacio a partir de el deseo de saber
            como funciona a bajo nivel el renderizado de las paginas web y cuales son las diferentes
            estrategias existentes en la actualidad que se usan para atacar esta tarea.
        </p>
        <p>
            Primero empezaremos por definir el termino de renderizado de paginas web.
        </P>
        <h2 id="definition">¿Que es un patron de renderizado?</h2>
        <h3> Segun aritmetrics.com: </h3>
        <p> 
            "El renderizado web, o renderización de páginas web, es el proceso de mostrar contenido
            web en un navegador web como Google Chrome o Firefox. Implica descargar páginas web de
            servidores web, analizar archivos HTML y CSS para crear la estructura de la página web,
            aplicar estilo y formato con CSS, cargar recursos externos como imágenes y vídeos, y 
            ejecutar acciones del lado del cliente como el código JavaScript."
        </p>
        <img src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <h2 id="static-pages">Paginas estaticas</h2>
        <p>
            El primer patron de renderizado del que hablaremos es el patro de paginas estaticas.
            Este es el patron mas simple y consiste en el envio de archivos estaticos por parte
            del servidor, sin agergar ningun proceso de renderizado de parte del cliente o del
            lado del servidor.
        </p>
        <p>
            Las paginas renderizadas con este patron suelen estar compuestas por unicamene HTML,
            CSS y Javascript, este ultimo con el fin de agregarle interactivadad a los componetes
            del archivo HTML.
        </p>
        <img src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p>
            Un ejemplo del uso de esta estrategia de renderizado puede ser la página de inicio de
            este sitio web. La pagina inicial existe como un archivo HTML en el servidor que almacena
            este sitio, este documento es cargado cuando accedes a la URL principal del sitio. Una vez
            cargado, el documento le dice al servidor que tiene que servir la hoja de estilos y el
            archivo principal de scripts (aqui es donde la magia empieza).
        </p>
    `;
    load_indexes();
}
function load_indexes() {
    console.log("loading indexes");
    __last_content_column.innerHTML = `
        <ul class="index-menu">
            <h3>Content table</h3>
            <li class="index-menu-item">
                <a class="hyperlink-container" href="#definition">
                    ¿Que es el renderizado?
                </a>
            </li>
            <li class="index-menu-item">
                <a class="hyperlink-container" href="#static-pages">
                    Paginas estaticas
                </a>
            </li>
        </ul>
    `;
}

// Revisar porque esta ruta funciona aunque fisicamente este niveles arriba
//fetch("./routerconfig.json") 
//    .then(response => response.json())
//    .then(object => {let test = object.DEFAULT_HOST_PATH})
//
// La idea de usar fetch esta deprecada pero seria interesante explorarla mas
// a fondo
//
class baseRouter {
    //listener = defaultListener;
    constructor() {
        this.parsedLocation = this.parseRequestedPath();
    }
    // Need to check the difference between defining the value of the field
    // with addWindowListener() and addWindowListener = function...
    // because asaning the function value would not let me use "this"
    addWindowListener() {
        console.log("adding the window listener");
        const browserWindow = window;
        browserWindow.addEventListener("hashchange", this.listener);
    }
    getRequestedPath() {
        return window.location.search.replace("?", "");
    }
    parseRequestedPath() {
        var request = this.getRequestedPath();
        let paths = [];
        if (request) {
            paths = request.replace("/", " /").split(" ").slice(1);
        }
        console.log("requested path: ", request, "paths: ", paths);
        return paths;
    }
}
class gpSpaRouter extends baseRouter {
    // Example of route type object
    // {path: "/", pageRenderer: () => window.location.pathname = router.DEFAULT_HOST_PATH + "/"},
    // Note: optionals parameters go last always
    constructor(routes, hostPath, customListener) {
        console.log("Creating the router class");
        super();
        console.log(this.parsedLocation);
        if (customListener !== undefined) {
            this.listener = customListener;
        }
        else {
            this.listener = () => defaultListener(this);
        }
        this.routes = routes;
        this.DEFAULT_HOST_PATH = hostPath;
        this.addWindowListener();
        if (this.parsedLocation.length)
            this.navigate(this.parsedLocation[0]);
    }
    checkForPaths() {
    }
    getRoute(path) {
        console.log("get route path: ", path);
        return this.routes.find(route => route.path === path);
    }
    /*
        * Notes:
        *
        * - If a define the function with a variable (load_route = functio())
        *   the "this" keyword would throw an error of implicity type Any
        */
    load_route(route) {
        const { path, pageRenderer } = route;
        // Change of the browsers path without reloading the page
        //let location_paths = window.location.pathname;
        //console.log("Paths before split: ", location_paths, location_paths.length);
        //let paths_lol = location_paths.split("/");
        //let paths = location_paths.split("/", 2);
        //let url_start = "";
        // paths[1] && url_start = "/";    why this does not work?
        //paths[1] && (url_start = "/");
        // let navigation_path = this.DEFAULT_HOST + "path";
        let pathToNavigate = path;
        if (this.DEFAULT_HOST_PATH !== undefined) {
            pathToNavigate = this.DEFAULT_HOST_PATH + path;
        }
        window.history.pushState({}, "", pathToNavigate);
        // Executing the method that renders the page
        return pageRenderer;
    }
    render(renderMethod) {
        renderMethod();
    }
    navigate(path) {
        console.log("nvaigating to: ", path);
        if (path === "/") {
            console.log("hello");
            this.returnHome();
            return;
        }
        const route = this.getRoute(path);
        const rendererMethod = this.load_route(route);
        this.render(rendererMethod);
    }
    returnHome() {
        if (this.DEFAULT_HOST_PATH) {
            console.log(window.location.pathname);
            console.log(this.DEFAULT_HOST_PATH);
            window.location.pathname = this.DEFAULT_HOST_PATH + "/";
        }
        else {
            window.location.pathname = "";
        }
    }
}
/*
* Notes:
* - I need to first create a new instance of the class with
* new basicRouter(). Check why and what would be the difference if
* i use new basicRouter; without the ()
*/

function createRouter(routes, repoName, customListener) {
    console.log("creating a route");
    return new gpSpaRouter(routes, repoName, customListener);
}
/*
    * Default listener method that will be attached to the Window object
    * if there is no custom listener declared.
*/
function defaultListener(routerInstance) {
    let path = window.location.hash.replace("#", "");
    console.log("catcech path: ", path);
    if (path.includes("/"))
        routerInstance.navigate(path);
}

// NOTES:
// Literlas: Constant values that are typed in the program as a part of the source code are called literals.
// Literals can be of any of the basic data types and can be divided into Integer Numerals, Floating-Point Numerals, Characters, Strings, and Boolean Values.
// Again, literals are treated just like regular variables except that their values cannot be modified after their definition.
createRouter([
    { path: "/study", pageRenderer: study },
    { path: "/render-patterns", pageRenderer: renderPatterns },
], "/luis-escobedo");
const systemThemeSwitch = document.getElementById("theme");
function setDarkTheme(ROOT_PSEUDOCLASS) {
    ROOT_PSEUDOCLASS.style.setProperty("--main-bg-color", "var(--bg-dark");
    ROOT_PSEUDOCLASS.style.setProperty("--secondary-color", "var(--secondary-dark");
    ROOT_PSEUDOCLASS.style.setProperty("--complementary-color", "var(--complementary-dark");
    ROOT_PSEUDOCLASS.style.setProperty("--font-color", "var(--font-dark");
}
function setLightTheme(ROOT_PSEUDOCLASS) {
    ROOT_PSEUDOCLASS.style.setProperty("--main-bg-color", "var(--bg-light");
    ROOT_PSEUDOCLASS.style.setProperty("--secondary-color", "var(--secondary-light");
    ROOT_PSEUDOCLASS.style.setProperty("--complementary-color", "var(--complementary-light");
    ROOT_PSEUDOCLASS.style.setProperty("--font-color", "var(--font-light");
}
function changeRootCustomProperties(e) {
    // Getting the root pseudoclass element
    const ROOT_PSEUDOCLASS = document.querySelector(":root");
    if (e.target.checked) {
        setDarkTheme(ROOT_PSEUDOCLASS);
    }
    else {
        setLightTheme(ROOT_PSEUDOCLASS);
    }
}
// Adding event listeners to the DOM elements
systemThemeSwitch.addEventListener("change", changeRootCustomProperties);
// Change theme switch status according to the default prefered system theme
