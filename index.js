


const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const MovieHub = document.querySelector("#MovieHub");


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let query = movieInput.value.trim()
    // value lene ke  liye console me



    if (!query) {
        return
    }
    // faltu ki api request nhi jayegi agar if condtion lgya to
    console.log(query);
    searchMovies(query)
}) // conditin agar kuch na ho to searcgh button na chali


async function searchMovies(movieName) {

    MovieHub.innerHTML = `<div class="loader"></div> `

    let response = await fetch(`http://www.omdbapi.com/?apikey=32721737&s=${movieName}`);
    let data = await response.json()
    console.log(data);



    if (data.Response === "True") {


        displayMovies(data.Search); // movie ko disply krn, derch dt ko serch krne ke liye
    } else {

console.log(data.Error);
        MovieHub.innerHTML = `<p>${data.Error}</p> `
    }

} //s parameter ko multiple value ke liye lgte hai




function displayMovies(movies) {

    MovieHub.innerHTML = ""

    movies.forEach((movie) => {
        const div = document.createElement("div")
        div.dataset.imdbID = movie.imdbID
        div.setAttribute("class", "movie-Card")

        div.innerHTML = `
<div>


   <img src=${movie.Poster}
                    alt="">

            </div>


            <div>
                <p> ${movie.Title} </p>
                <p>${movie.Year} </p>
            </div>

        
`


        MovieHub.append(div)

    });


}

MovieHub.addEventListener("click", (e) => {
    e.stopPropagation(); //koi event riger na ho
    const movieCard = e.target.closest(".movie-Card")

    let imdbID = movieCard.dataset.imdbID
    location.href = `movie-deatail.html?id=${imdbID}` // url ko change krta hai dusre page peleke jta hai
})




