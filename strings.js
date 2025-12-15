var user = "Rama";
var greeting = "Hello! how are you, ";
console.log(greeting + user + "?"); //concatenation of string using + operator

// --------------------------------------------------------

//string always wins when we use + operator with other data types

var points = 100;  //number
var bonus = "50";  //string 
let totalPoints = points + bonus;  //number+string=string
console.log(totalPoints);
console.log(typeof(totalPoints));

// --------------------------------------------------------

//escape sequences in strings
// var message = "Hello! i like to watch the movie "Inception""; //SyntaxError: Unexpected identifier 'Inception'
var message = "Hello! i like to watch the movie \"Inception\"";
console.log(message);