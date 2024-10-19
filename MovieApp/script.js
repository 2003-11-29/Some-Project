const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const container = document.querySelector(".container")    

const getMovie = async (api) => {
    const respose = await fetch(api)
    const data = await respose.json()
    ShowMovies(data.results)
    
}    
const ShowMovies = (data)=>{
    container.innerHTML = ""; //empty the container firstly
    data.forEach(item => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`
                        <div class="box">
                    <img src="${IMGPATH + 
                        item.poster_path}" alt="movie">
                </div>
                <div class="info">
                    <div class="tittle">
                        <h2>${item.original_title}</h2>
                        <p>${item.
                            vote_average}</p>
                    </div>
                    <div class="desc">
  
                        <h3>Overview</h3>
                    <p>${item.overview}</p>
                    </div>
                </div>
        `
        container.appendChild(card)
    });
}

document.querySelector("#search").addEventListener("keyup",
    function (event) {
        if (event.target.value != "") {
            getMovie(SEARCHAPI + event.target.value)
        } else {
            getMovie(APIURL)
        }
    }
)
getMovie(APIURL);