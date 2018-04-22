/**
	This file contains the solution to the assignment problems for chapter 3
**/

/** Problem 1: a function to find the largest string in an array of strings **/
function max_str(arr) {
  return arr.reduce(function(prev, curr) {
    if (curr.length > prev.length) {
      return curr;
    } else {
      return prev;
    }
  }, "");
}


/** Problem 2: a function that takes an array of numbers and returns the sum of squares of those numbers **/
function sum_of_squares(arr) {
  return arr.map(function(elem) {return elem * elem}).reduce(function(prev, curr) {return prev + curr}, 0);
}

/** Problem 3: a function that takes an array of numbers as an argument and filters and returns the even numbers **/
function filter_even(arr) {
  return arr.filter(function(elem) {return elem % 2 == 0});
}

/** Problem 4: a function that takes an array and a criteria function(for filtering) and returns the array of those elements which do not fulfill the criteria **/
function arr_complement(arr, criteria_fn) {
  return arr.filter(function(i) {return !criteria_fn(i)});
}




