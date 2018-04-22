// is_integer()		**** checks to see if the input is an integer or not.
function is_integer(num){
	return typeof(num) == 'number' && Math.floor(num) == n;
}

// sumArray()		*** add the parts of the array.
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

//convertTemp()		*** convert temperatures to and from celsius, fahrenheit. 
	//[ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]
function temp_converter(from, reading) {
  if (from === "celsius") {
	return (reading * 9/5) + 32 + " degree F";
  } else {
	return (reading -32) * 5 / 9 + " degree celsius";
  }
}

//factorial()
function factorial(num){
	//define a result variable
	var result = 1;
	//calc factorial and store value in result
	for (var i = 1, i<=num, i++){
		result *= i;
	}
	//return the result variable
	return result;
}

// convertCoins()
function convertCoins(amount){
	var den = [25,10,5,2,1];
	var index = 0;
	while (amount > 0){
		while (amount < den[index]){
			index++;
		}
		amount -= den[index];
		console.log(den[index]);
	}
}





