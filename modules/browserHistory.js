export default function logHistory() {
    window.history.pushState({}, "", "/curriculum");
    const root = document.getElementById("root");

    const curriculum = document.createElement("p");

    curriculum.innerHTML("Mi curriculum");

    root.appendChild(curriculum);
}
