//Conditional Exercises

var age = prompt('What is your age?');

if age < 0 {
	console.log('You are born; therefore, your age should be a positive number.');
} 
if age === 21 {
	console.log('Happy 21st birthday!');
} 
if age % 2 !=== 0 {
	console.log("Your age is odd!");
} 
if age % Math.sqrt(age) === 0 {
	console.log('Perfect square!')
}