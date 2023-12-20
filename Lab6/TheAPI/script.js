/* Preparing headers and parameters */
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer --YOUR_TOKEN--'
  }
};

/* Hitting an endpoint to fetch some data */
var cards = document.getElementById('data')
fetch('https://api.--YOUR_LINK--.org/3/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(films =>  {

    /* Looping on data and append within HTML */
    films.results.forEach(function (film) {
      cards.innerHTML += `
              <div class="film">
              <img id="pic" src="https://api.--YOUR_LINK--.org/t/p/w500/${film.poster_path}" alt>
              <div class="cover">
                    <h2>${film.title}</h2>
                    <p class="info-p">${film.overview}</p>
                    <p class="rate">Rate: ${film.vote_average}</p>
                    <p class="date">Date: ${film.release_date}</p>
                  </div>
              </div>
              `; 
          });   

  })
  .catch(err => alert(err));

