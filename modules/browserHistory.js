export default function logHistory() {
    let url = `${window.location.href}/new`
    console.log(window.history)
    window.history.pushState({}, "", url)
}
