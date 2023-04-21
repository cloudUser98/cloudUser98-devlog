export default function logHistory(url, page) {

    // Change of the browsers url without reloading the page
    let location = window.location.href + url;
    window.history.pushState({}, "", location);
    
    // Executing the method that renders the page
    page();
}
