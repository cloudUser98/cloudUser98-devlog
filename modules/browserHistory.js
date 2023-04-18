export default function logHistory() {
    let url = `${window.location.hostname}/curriculum`
    window.history.pushState({}, "", url)
}
