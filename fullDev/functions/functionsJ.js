							// FUNCTIONS

//isEven()

//function isEven(num){
//	if (num % 2 === 0){
//		return true;
//	} else {
//		return false;
//	}
//}

function isEven(num){
	return num % 2 === 0;
}

// factorial()

//function factorial(num){
	//define a result variable
//	var result = 1;
	//calc factorial and store value in result
//	for (var i = 1, i<=num, i++){
//		result *= i;
//	}
	//return the result variable
//	return result;
//}
			// working backwards...
function factorial(num){
	if (num = 0){
		result = 1;
	}
	//define a result variable
	var result = num;
	//calc factorial and store value in result
	for (var i = num-1, i<=1, i--){
		result *= i;
	}
	//return the result variable
	return result;
}

//kebabToSnake()      !Important! .replace method

function kebabToSnake(str){
	//replace all '-' with '_'
	var newStr = str.replace(/-/g, '_');
	//return str
	return newStr;
}

