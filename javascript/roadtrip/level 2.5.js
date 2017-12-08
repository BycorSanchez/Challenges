
//Task1
var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];
list[3] = 4;

//Task2
var list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list2.push(10);

//Task3
var values = ["a string", 8, false];

//Task4
var values2 = ["Jason", 4, true];
var bool = values2.pop();

//Task5
var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eigthiesMovies = [movie1, movie2];

var infant = eigthiesMovies[1][4];

//Task6
var movie = "";

for(var i = 1; i < eigthiesMovies[1].length; i++){
	movie += " " + eigthiesMovies[1][i];
}
movie = movie.substring(1);

alert("The movie name is: " + movie);
