





// const moviedeails = document.querySelector("#movie-deails");
// const params = new URLSearchParams(location.search);
// const imdbID = params.get("id");

// if (imdbID) {
//     searchMovie(imdbID.trim());
// }

// async function searchMovie(imdbID) {
//     try {
//         let response = await fetch(
    
//         );

//         let data = await response.json();
//         console.log(data);

//         if (data.Response === "True") {
//             displayMovies(data);
//         } else {
//             moviedeails.innerHTML = `<p class="text-red-500">${data.Error}</p>`;
//             console.log(data.Error);
//         }
//     } catch (error) {
//         console.log(error);
//         moviedeails.innerHTML = `
//             <p class="text-red-500">Something went wrong. Please try again.</p>
//         `;
//     }
// }

// function displayMovies(data) {
//     moviedeails.innerHTML = `

//     <div>
//         <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">

//             <div>
//                 <img
//                     src="${data.Poster !== "N/A" ? data.Poster : "https://placehold.co/400x600?text=No+Poster"}"
//                     alt="${data.Title}"
//                     class="w-full max-w-sm mx-auto md:max-w-none rounded-2xl border border-zinc-700 shadow-xl"
//                 >
//             </div>

//             <div class="flex flex-col gap-6">

//                 <div>
//                     <p class="text-red-500 text-sm font-semibold tracking-widest mb-3">
//                         MOVIE DETAILS
//                     </p>

//                     <h2 class="text-3xl md:text-4xl font-bold mb-4">
//                         ${data.Title}
//                     </h2>

//                     <section class="flex flex-wrap gap-3 text-sm">
//                         <span class="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg">
//                             ${data.Year}
//                         </span>

//                         <span class="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg">
//                             ${data.Released}
//                         </span>

//                         <span class="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg">
//                             ${data.Rated}
//                         </span>

//                         <span class="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg">
//                             ${data.Runtime}
//                         </span>
//                     </section>

//                     <p class="text-zinc-400 mt-4">
//                         Genre:
//                         <span class="text-white">${data.Genre}</span>
//                     </p>

//                     <div class="inline-flex items-center gap-3 mt-5 bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-3">
//                         <span class="text-yellow-400 text-2xl">★</span>

//                         <div>
//                             <p class="text-xs text-zinc-400">IMDb Rating</p>
//                             <p class="text-xl font-bold">
//                                 ${data.imdbRating}
//                                 <span class="text-sm text-zinc-400">/10</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="border-t border-zinc-800 pt-5">
//                     <h3 class="text-xl font-bold mb-3">
//                         <span class="text-red-500">Plot</span> Overview
//                     </h3>

//                     <p class="text-zinc-400 leading-7">
//                         ${data.Plot}
//                     </p>
//                 </div>

//                 <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                     <section class="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
//                         <p class="text-sm text-zinc-500 mb-2">Director</p>
//                         <p class="font-semibold">
//                             ${data.Director && data.Director !== "N/A" ? data.Director : "Not available"}
//                         </p>
//                     </section>

//                     <section class="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
//                         <p class="text-sm text-zinc-500 mb-2">Writer</p>
//                         <p class="font-semibold">
//                             ${data.Writer && data.Writer !== "N/A" ? data.Writer : "Not available"}
//                         </p>
//                     </section>

//                 </div>

//                 <div class="border-t border-zinc-800 pt-5">
//                     <h3 class="text-lg font-bold mb-2">
//                         <span class="text-red-500">Cast &</span> Actors
//                     </h3>

//                     <p class="text-zinc-400 leading-7">
//                         ${data.Actors && data.Actors !== "N/A" ? data.Actors : "Not available"}
//                     </p>
//                 </div>

//                 <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                     <section class="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
//                         <p class="text-sm text-zinc-500 mb-2">Country</p>
//                         <p class="font-semibold">
//                             ${data.Country && data.Country !== "N/A" ? data.Country : "Not available"}
//                         </p>
//                     </section>

//                     <section class="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
//                         <p class="text-sm text-zinc-500 mb-2">Language</p>
//                         <p class="font-semibold">
//                             ${data.Language && data.Language !== "N/A" ? data.Language : "Not available"}
//                         </p>
//                     </section>

//                 </div>

//             </div>
//         </div>

//         <a
//             href="https://www.imdb.com/title/${data.imdbID}/"
//             target="_blank"
//             rel="noopener noreferrer"
//             class="inline-flex items-center gap-2 mt-6 bg-yello-500 text-white font-semibold px-6 py-3 rounded-xl"
//         >
//             View on IMDb
//         </a>

//     </div>
//     `;
// }









const moviedeails = document.querySelector("#movie-deails");
const params = new URLSearchParams(location.search);
const imdbID = params.get("id");

if (imdbID) {
    searchMovie(imdbID.trim());
} else {
    moviedeails.innerHTML = `
        <p class="text-red-500">Movie ID not found.</p>
    `;
}

async function searchMovie(imdbID) {
    try {
        let response = await fetch(
            `https://www.omdbapi.com/?apikey=32721737&i=${encodeURIComponent(imdbID)}&plot=full`
        );

        let data = await response.json();
        console.log(data);

        if (data.Response === "True") {
            displayMovies(data);
        } else {
            moviedeails.innerHTML = `<p class="text-red-500">${data.Error}</p>`;
            console.log(data.Error);
        }
    } catch (error) {
        console.log(error);
        moviedeails.innerHTML = `
            <p class="text-red-500">Something went wrong. Please try again.</p>
        `;
    }
}

function displayMovies(data) {
    moviedeails.innerHTML = `

    <div>
        <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">

            <div>
                <img
                    src="${data.Poster !== "N/A" ? data.Poster : "https://placehold.co/400x600?text=No+Poster"}"
                    alt="${data.Title}"
                    class="w-full max-w-sm mx-auto md:max-w-none rounded-2xl border border-zinc-700 shadow-xl"
                >
            </div>

            <div class="flex flex-col gap-6">

                <div>
                    <p class="text-red-500 text-sm font-semibold tracking-widest mb-3">
                        MOVIE DETAILS
                    </p>

                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        ${data.Title}
                    </h2>

                    <section class="flex flex-wrap gap-3 text-sm">
                        <span class="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg">
                            ${data.Year}
                        </span>

                        <span class="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg">
                            ${data.Released}
                        </span>

                        <span class="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg">
                            ${data.Rated}
                        </span>

                        <span class="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg">
                            ${data.Runtime}
                        </span>
                    </section>

                    <p class="text-zinc-400 mt-4">
                        Genre:
                        <span class="text-white">${data.Genre}</span>
                    </p>

                    <div class="inline-flex items-center gap-3 mt-5 bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-3">
                        <span class="text-yellow-400 text-2xl">★</span>

                        <div>
                            <p class="text-xs text-zinc-400">IMDb Rating</p>
                            <p class="text-xl font-bold">
                                ${data.imdbRating}
                                <span class="text-sm text-zinc-400">/10</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-zinc-800 pt-5">
                    <h3 class="text-xl font-bold mb-3">
                        <span class="text-red-500">Plot</span> Overview
                    </h3>

                    <p class="text-zinc-400 leading-7">
                        ${data.Plot}
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <section class="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
                        <p class="text-sm text-zinc-500 mb-2">Director</p>
                        <p class="font-semibold">
                            ${data.Director && data.Director !== "N/A" ? data.Director : "Not available"}
                        </p>
                    </section>

                    <section class="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
                        <p class="text-sm text-zinc-500 mb-2">Writer</p>
                        <p class="font-semibold">
                            ${data.Writer && data.Writer !== "N/A" ? data.Writer : "Not available"}
                        </p>
                    </section>

                </div>

                <div class="border-t border-zinc-800 pt-5">
                    <h3 class="text-lg font-bold mb-2">
                        <span class="text-red-500">Cast &</span> Actors
                    </h3>

                    <p class="text-zinc-400 leading-7">
                        ${data.Actors && data.Actors !== "N/A" ? data.Actors : "Not available"}
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <section class="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
                        <p class="text-sm text-zinc-500 mb-2">Country</p>
                        <p class="font-semibold">
                            ${data.Country && data.Country !== "N/A" ? data.Country : "Not available"}
                        </p>
                    </section>

                    <section class="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
                        <p class="text-sm text-zinc-500 mb-2">Language</p>
                        <p class="font-semibold">
                            ${data.Language && data.Language !== "N/A" ? data.Language : "Not available"}
                        </p>
                    </section>

                </div>

            </div>
        </div>

        <a
            href="https://www.imdb.com/title/${data.imdbID}/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
            View on IMDb 
        </a>

    </div>
    `;
}