import $ from 'jquery';

function getMovies() {
return $.ajax({
url: "http://www.omdbapi.com/?apikey=47b3f579&s=back",
type: "GET",
crossDomain: true
});
}

export default getMovies;
