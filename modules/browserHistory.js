export default function logHistory() {
    actual = window.location.href
    actual += "/new";
    console.log(window.history)
    window.history.pushState({}, "", actual)
}
