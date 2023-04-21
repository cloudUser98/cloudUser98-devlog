export default function project_euler() {

    // Getting the root element of the document
    const root = document.getElementById("root");

    root.innerHTML = ""

    // Creating the new elemenets for the document
    const header = document.createElement("H1");
    const body = document.createElement("div");
    const text = document.createElement("p");

    header.innerHTML = "PROJECT EULER"
    text.innerHTML = "Aqui existiran mis avances en el proyecto Euler"

    root.appendChild(header);
    root.appendChild(body);
    body.appendChild(text);
}
