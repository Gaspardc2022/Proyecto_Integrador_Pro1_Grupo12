let apiKey = '74fa5f666f80e0a07da9241346d3088b'
let url = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`

let container = document.querySelector(".container");

fetch(url)
.then(function (respuesta) {
    return respuesta.json();})

.then(function (data) {
    let movies = "";
    for (let i = 0; i < 5; i ++) {
        console.log(data.result[i]);
        movies += `<article>
        #poner imagen,titulo,boton

        </article>`
    }
    container.innerHTML = movies;

return data;
})
.catch(function (error) {
    console.log(error);
    return error;
})


