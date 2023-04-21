export default function logHistory(url, page) {

    // Change of the browsers url without reloading the page
    window.history.pushState({}, "", url);
    
    // Executing the method that renders the page
    page()
}
