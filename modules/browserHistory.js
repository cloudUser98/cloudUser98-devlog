export default function logHistory(url, page) {

    console.log("PATH FOR ROUTER: ", url)
    console.log("PAGE TO LOAD FROM PATH: ", page)

    // Change of the browsers url without reloading the page
    let location = window.location.href + url;
    window.history.pushState({}, "", location);
    
    // Executing the method that renders the page
    page();
}
