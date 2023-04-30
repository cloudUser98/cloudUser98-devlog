import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: "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"
});

// Using the Github API to get the data from the repository
async function get_repository_data() {
    let respository_data = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
      owner: "cloudUser98",
      repo: "simplenote-personal-notes",
      path: "",
      headers: {
          accept: "application/vnd.github.html"
      }
    });

    return respository_data;
}


// using the "atob" method to decode base64 value

// Githhub API for Markdown process
// The returned object has a data property with the html
// let html = await octokit.request('POST /markdown', {
//   text: text,
//   headers: {
//     // 'X-GitHub-Api-Version': '2022-11-28'
//   }
// })

let root = document.getElementById("content");

async function Notes() {
    console.log("NOTES");
    root!.innerHTML = "";

    let respository_data = await get_repository_data();

    // Investigate why this forEach(value: any =>...) does not work
    console.log(respository_data.data);
    //respository_data.data.forEach((entry: any) => {
    //    let hyperlink = document.createElement("a");
    //    hyperlink.innerHTML = entry.name.replace("# ", "");
    //    root!.appendChild(hyperlink);
    //});
}

export default Notes;
