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
            <h4 class="menu-title">Content table</h4>
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
            <h4 class="menu-title">Content table</h4>
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

class baseRouter {
    constructor() {
        this.parsedLocation = this.parseRequestedPath();
    }
    addWindowListener() {
        const browserWindow = window;
        browserWindow.addEventListener("popstate", this.listener);
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
        return paths;
    }
}
class gpSpaRouter extends baseRouter {
    constructor(routes, hostPath, customListener) {
        super();
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
        return this.routes.find(route => route.path === path);
    }
    load_route(route) {
        const { path, pageRenderer } = route;
        let pathToNavigate = path;
        if (this.DEFAULT_HOST_PATH !== undefined) {
            pathToNavigate = this.DEFAULT_HOST_PATH + path;
        }
        window.history.replaceState({}, "", pathToNavigate);
        return pageRenderer;
    }
    render(renderMethod) {
        renderMethod();
    }
    navigate(path) {
        if (path === "/") {
            this.returnHome();
            return;
        }
        const route = this.getRoute(path);
        const rendererMethod = this.load_route(route);
        this.render(rendererMethod);
    }
    returnHome() {
        if (this.DEFAULT_HOST_PATH) {
            window.location.replace(this.DEFAULT_HOST_PATH + "/");
        }
        else {
            window.location.replace("");
        }
    }
}

/*
    * Main method for creating the Router object for the project
*/
function createRouter(routes, repoName, customListener) {
    return new gpSpaRouter(routes, repoName, customListener);
}
/*
    * Default listener method that will be attached to the Window object
    * if there is no custom listener declared.
*/
function defaultListener(routerInstance) {
    const currentWindowLocation = window.location;
    // Checking if the path was pushed as a hashed path: "#/path"
    const hashPath = currentWindowLocation.hash.replace("#/", "/");
    // Checking if the path was pushed as a normal path: "/path"
    const path = currentWindowLocation.pathname.replace(routerInstance.DEFAULT_HOST_PATH, "");
    const navigationPath = hashPath || path;
    console.log(navigationPath);
    routerInstance.navigate(navigationPath);
}

// NOTES:
// Literals: Constant values that are typed in the program as a part of the source code are called literals.
// Literals can be of any of the basic data types and can be divided into Integer Numerals, Floating-Point Numerals, Characters, Strings, and Boolean Values.
// Again, literals are treated just like regular variables except that their values cannot be modified after their definition.
createRouter([
    { path: "/study", pageRenderer: study },
    { path: "/render-patterns", pageRenderer: renderPatterns },
], "/cloudUser98-devlog");
const systemThemeSwitch = document.getElementById("theme");
const searchBar = document.getElementById("search-bar");
window.onkeyup = (event) => {
    if (event.key == "/") {
        searchBar === null || searchBar === void 0 ? void 0 : searchBar.focus({ preventScroll: false });
    }
};
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
