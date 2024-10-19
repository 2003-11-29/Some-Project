const ApiUrl = "https://api.github.com/users/";
let main = document.querySelector(".main");
let searchBox = document.querySelector("#search");

// Parmission on github uses
const token = "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"; // Personal Access Token

const getUser = async (userName) => {
    const response = await fetch(ApiUrl + userName, {
        headers: {
            "Authorization": `token ${token}`
        }
    });
    
    if (response.status === 404) {
        main.innerHTML = `<p style:font-size: 25px;>User not found</p>`;
        return;
    }
    // Await the json response
    const data = await response.json(); 

    const card = `
        <div class="card">
            <div class="img">
                <img src="${data.avatar_url}" alt="${data.name}">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul class="info">
                    <li>${data.followers} <strong>Followers</strong></li>
                    <li>${data.following} <strong>Following</strong></li>
                    <li>${data.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
                
                </div>
            </div>
        </div>
    `;
    
    main.innerHTML = card;
    getRepos(userName)
};

getUser("taylorotwell");

const getRepos = async (userName) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(ApiUrl +  userName + "/repos", {
        headers: {
            "Authorization": `token ${token}` // Add the token here as well
        }
})
    const data= await response.json()
    
    data.forEach(
        (element) => {
            const elem = document.createElement("a")
            elem.classList.add("repo")
            elem.href = element.html_url
            elem.innerText = element.name
            elem.target = "_blank"
            repos.appendChild(elem)  
    })
}
const formSubmit = () =>{
    let userName = searchBox.value.trim(); // Remove any spaces around the username
    if (userName !== "") {
        getUser(userName);
        searchBox.value=""
    }
    
    return false;
}
// formSubmit()
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        formSubmit();
    }
});
searchBox.addEventListener(
    "focusout", function(){
        formSubmit()
    }
)
