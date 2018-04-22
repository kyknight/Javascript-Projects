//Guessing game

		//create secretNumber
var secretNumber = 4;
		//ask your user for guess
var guess = Number(prompt('Guess a number.'));
//or var stringGuess = prompt('Guess a number.'); var guess = Number(stringGuest);
		//check if gues is right guess
if guess === secretNumber {
	alert('You got it right!');
} 
		//otherwise check if higher.
else if guess > secretNumber {
	alert('Too high. Guess again.');
}
		//otherwise check if lower.
else {
	alert('Too low. Guess again.');
}