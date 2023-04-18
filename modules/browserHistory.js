export default function logHistory() {
    console.log(window.history)
    window.history.pushState({}, "", "https://clouduser98.github.io/luis-escobedo/modules/browserHistory.js")
}
