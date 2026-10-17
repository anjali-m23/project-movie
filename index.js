


const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const MovieHub = document.querySelector("#MovieHub");


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let query = movieInput.value.trim()
    



    if (!query) {
        return
    }
    
    console.log(query);
    searchMovies(query)
}) 


async function searchMovies(movieName) {

    MovieHub.innerHTML = `<div class="loader"></div> `

    let response = await fetch(`http://www.omdbapi.com/?apikey=32721737&s=${movieName}`);
    let data = await response.json()
    console.log(data);



    if (data.Response === "True") {


        displayMovies(data.Search);
    } else {

console.log(data.Error);
        MovieHub.innerHTML = `<p>${data.Error}</p> `
    }

} 




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
    e.stopPropagation(); 
    const movieCard = e.target.closest(".movie-Card")

    let imdbID = movieCard.dataset.imdbID
    location.href = `movie-deatail.html?id=${imdbID}` 
})




