const content = document.getElementById("content");
const __last_content_column = document.getElementById("last-content-column");
function study() {
    content.innerHTML = `
        <h1>Temas de estudio</h1>
        <p>
            Aqui iran todos los temas de estudio que estoy tomando por el momento.
        </p>
    `;
    load_indexes();
}
;
function load_indexes() {
    console.log("loading indexes");
    __last_content_column.innerHTML = `
        <ul class="index-menu">
            <h3>Content table</h3>
            <li class="index-menu-item">
                <a class="hyperlink-container" href="/#render-patterns">
                    Rendering patterns for web apps
                </a>
            </li>
        </ul>
    `;
}
;
export default study;
