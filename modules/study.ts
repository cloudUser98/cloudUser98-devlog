const content = document.getElementById("content");
const __last_content_column = document.getElementById("last-content-column");

function study() {
    content!.innerHTML = `
        <h1>Temas de estudio</h1>
        <p>
            Aqui iran todos los temas de estudio que estoy tomando por el momento.
        </p>
    `

    load_indexes();
};

function load_indexes() {
    console.log("loading indexes");

    __last_content_column!.innerHTML = `
        <ul class="index-menu">
            <h4 class="menu-title">Content table</h4>
            <li class="index-menu-item">
                <a class="hyperlink-container" href="#/render-patterns">
                    Patrones de renderizado para paginas web
                </a>
            </li>
        </ul>
    `
};

export default study;
