				// Assignment 2
// reverse function.
function reverse(str){
	return str.split('').reverse().join('');
}

//comparator function
function circle_comparator(c1, c2) {
  return c1.radius - c2.radius;  
}
// then we can use this in the sort function

//lengthOfArray
function length_of_array(arr) {

  var counter = 0;
  
  arr.forEach(function() {counter++;});
  
  return counter;
}




