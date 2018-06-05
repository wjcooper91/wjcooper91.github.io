
var cpuChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses= [];
var computerGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];



document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
  var computerGuess = cpuChoices[Math.floor(Math.random()*cpuChoices.length)];
  userGuesses.push(userGuess);

if (userGuess == computerGuess) {
  wins++;
  alert('Zoltar Speaks! Nice, you did it! You Won!');
  guessesLeft = 9;
  userGuesses.length = 0;
}

else if (guessesLeft == 0){
            losses++;
            alert('Zoltar Speaks! You guessed wrong.');
            guessesLeft = 9;
            userGuesses.length = 0;
        }
        
else if (userGuess !== computerGuess){
guessesLeft--;
 }  

var html =
"<p>Total Wins: " +  wins + "</p>" +
"<p>Total Losses: " +  losses + "</p>" +
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Your Guesses so far: " + userGuesses + "</p>";


document.querySelector('#game').innerHTML = html;
}