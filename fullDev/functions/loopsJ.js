// print all numbers between -10 and 19
console.log ('print all numbers between -10 and 19');

var i = -10
while ( i < 20){
	console.log(i);
	i++;
}


// print all even numbers between 10 and 40
console.log ('print all even numbers between 10 and 40');

var j = 10;
while ( j < 41){
	console.log(j);
	j += 2;
}


// print all odd numbers between 300 and 333
console.log ('print all odd numbers between 300 and 333');

var k = 300;
while ( k < 334){
	if ( k % 2 !=== 0){
		console.log(k);
	}
	k++;
}


// print all numbers divisible by 5 AND 3 between 5 and 50
console.log ('print all numbers divisible by 5 AND 3 between 5 and 50');

var a = 5;
while ( a < 51){
	if ( a % 5 === 0 && a % 3 === 0){
		console.log(a);
	}
	a++;
}

