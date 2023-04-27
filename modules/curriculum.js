export default function Curriculum() {
    const parser = new DOMParser();

    let html = `
        <div>
            HOLAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
    `

    const created_document = parser.parseFromString(html, "text/html");

    let root = document.getElementById("content");
    //
    // We erase all the childs from the root node
    root.innerHTML = "";

    // root.appendChild(created_document);
    // We can't do this beacuse a "document" node cant be appended as a child
    root.appendChild(created_document.documentElement);
}
