const url = 'https://api.themoviedb.org/3/movie/popular?api_key=9b7c3ede447b14c5e0e9d33a137ddac9&language=vi-VN';

fetch(url)

    .then(res => res.json())
    .then(data => {

        display(data.results);

    });

function display(List){

    const movie_container = document.getElementById("movies");
    movie_container.innerHTML = ""; 
    
    List.forEach(movie => {

        const movieElement = document.createElement("div");
        movieElement.classList.add("movies");

        movieElement.innerHTML = `
        
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <div>

                <h3>${movie.title}</h3>
                <p>${movie.overview.substring(0, 100)}...</p>
                <button onclick = "viewMovie(${movie.id})">Xem chi tiết</button>

            </div>

        `;

        movie_container.appendChild(movieElement);

    })


}


function viewMovie(id){
    alert(`Xem chi tiết tại: ${id}`)
}

//document.addEventListener("DOMContentLoaded", fetchMovies);