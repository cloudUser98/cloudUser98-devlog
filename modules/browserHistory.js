export default function logHistory(url, page) {

    // Change of the browsers url without reloading the page
    location = "%s%s" % (window.location.href, url);
    window.history.pushState({}, "", url);
    
    // Executing the method that renders the page
    page();
}
