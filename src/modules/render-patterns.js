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
;
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
;
function scrollTo(element, to, duration) {
    if (duration <= 0)
        return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to)
            return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
export default renderPatterns;
