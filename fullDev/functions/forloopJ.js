						//FOR LOOPS
//print all numbers between -10 and 19
console.log('print all numbers between -10 and 19');
for (var i=-10, i<20, i++){
	console.log(i);
}

//print all even numbers between 10 and 40
console.log('print all even numbers between 10 and 40');
for (var i=10, i<41, i+=2){
	console.log(i);
}

//print all odd numbers between 300 and 333
console.log('print all odd numbers between 300 and 333');
for (var i=300, i<334, i++){
	if (i % 2 !=== 0){
		console.log(i);
	}
}

//print all numbers divisible by 5 AND 3 between 5 and 50
console.log('print all numbers divisible by 5 AND 3 between 5 and 50');
for (var i=5, i<51, i++){
	if (i % 5 === 0 && i % 3 === 0){
		console.log(i);
	}
}