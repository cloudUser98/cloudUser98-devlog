const layout = document.getElementById("layout");
function study() {
    layout.innerHTML = `
        <div class="flex-column">
            WIP
        </div>
        <div id="content" class="flex-column main-column">
            <h1 class="main-title">Temas de estudio</h1>
            <p>
                Aqui iran todos los temas de estudio que estoy tomando por el momento.
            </p>
        </div>
        <div id="last-content-column" class="flex-column">
            <ul class="index-menu">
                <h4 class="menu-title"> Contenido </h4>
                <li class="index-menu-item">
                    <a class="hyperlink-container" href="#about-me">
                        Sobre mi
                    </a>
                </li>
            </ul>
        </div>

    `;
    const __last_content_column = document.getElementById("last-content-column");
    load_indexes(__last_content_column);
}
;
function load_indexes(__last_content_column) {
    console.log("loading indexes");
    __last_content_column.innerHTML = `
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
;
export default study;
