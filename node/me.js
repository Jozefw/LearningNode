var movies = require('./movies');

var myMovies = movies();
myMovies.favoriteMovies = "Hangover";
console.log("Jozef's fav movie is " + myMovies.favoriteMovies)
