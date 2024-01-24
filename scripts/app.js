let FilmNameRef= document.getElementById("film__name")
let SuchTaste = document.getElementById("such__taste")    
let Ergebnis = document.getElementById("Ergebnis")

function Filme() {
    let filmName = FilmNameRef.value 
    let key = 'fb32189b'
    let url = `https://www.omdbapi.com/?t=Batman&apikey=${key}`

    if (filmName.length <= 0) {
        Ergebnis.innerHTML = `<h3 class="nachricht">Bitte den Film Name eingeben</h3>`
    }

    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            
            if (data.Response == "True") {
                Ergebnis.innerHTML = `<div class="Info"> 
                <img src=${data.Poster} class="poster">
                </div>
                <h2>${data.Title}</h2>
                <div class="bewertung">
                <img src="assets/star.png">
                <h4>${data.imdbRating}</h4>
                </div>
                <div class="Einzelheiten"> 
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
                </div>
                <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>`
            }
            
            else {
                Ergebnis.innerHTML = `<h3 class="nachricht">${data.Error}</h3>`
            }
        })
        .catch(() => {
            Ergebnis.innerHTML = `<h3 class "nachricht">Error</h3>`
        })
    }
}

SuchTaste.addEventListener("click", Filme)
window.addEventListener("load", Filme)

Filme()