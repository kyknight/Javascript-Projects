				// ARRAYS   **** first data structure



// Push    YES arguement -ADDS and arguement to the end of an array.
//Pop     NO arguement -REMOVES  the last element of an array.

//Shift   -REMOVES an element from the beginning of the array.
//Unshift -ADDS an element to the beginning of an array.

//IndexOf    -finds the index of the an item in an array.

//Slice   -copies parts of an array.


				//TODO List App Part1
				     //needs a html doc to be linked to.
var todos = [];
var input = prompt('What would you like to do?');

while (input !== 'quit'){
	if (input === 'list'){
		console.log(todos);
	} else if (input==='new'){
		//ask for new todo
		var newTodo = prompt('Enter new todo');
		//add to the todo array
		todos.push(newTodo);
	}
	input = prompt('What would you like to do?');
}

console.log('OK, YOU QUIT THE APP');

							// ARRAY ITERATION
									//best for updating comments on a page.
//FOR LOOP
		//can use for loops using the array's length property.
//ForEach			arr.forEach(someFunction)
		//JS provided an easy built-in way of iterating over an array.
		// easier and faster than for loops.
		//dont need the '()' when the function is already defined outside of the forEach.

							//TODO LIST Part2
						//adds 'list' and 'delete' methods

var todos = [];
var input = prompt('What would you like to do?');

while (input !== 'quit'){
		//handle input
	if (input === 'list'){
		listTodos();
	} else if (input==='new'){
		addTodo();
	} else if (input === 'delete'){	//Adds a delete method.
		deleteTodo();
	}

	input = prompt('What would you like to do?');
}

console.log('OK, YOU QUIT THE APP');

	//refactored to make logic simple and short.
function listTodos(){
	console.log('*********');
		//adding a list method.
		todos.forEach(function(todo, i){
			console.log(i + ': ' + todo);
		});
		console.log('*********');
}

function addTodo(){
	//ask for new todo
		var newTodo = prompt('Enter new todo');
		//add to the todo array
		todos.push(newTodo);
		console.log('added todo');
}

function deleteTodo(){
	//ask for index of todo to be deleted
		var index = prompt('Enter index of todo to delete');
		//delete that todo   //splice deletes from anywhere
		todos.splice(index,1);
		console.log('deleted todo');
}

						//Array Problem Set

// printReverse()    just prints out the array in reverse


function printReverse(arr){
	for (var i=arr.length-1, i>=0, i--){
		console.log(arr[i];
	}
}
printReverse([1,3,4,5]);

// isUniform()    -T if all elements are identical and F if otherwise

function isUniform(arr){
	var first = arr[0];
	for (var i=0, i<arr.length, i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}
isUniform([1,1,1,1,1]);

// sumArray()		-adds the numbers of the array up and returns the sum.


function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}
sumArray([1,2,3]);

//max()		-Returns the max number of an array

function max(arr){
	var max = arr[0];
	for(var i=1, i<arr.length, i++){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}
max([1,2,4]);

				//**** OPTIONAL ADVANCED ****
					// Building own version of forEach()
function meForEach(arr, func){
	//loop through array
	for (var i=0, i<arr.length, i++){
		//call func for each item in array
		func(arr[i]);
	}
}

	// using an annoymous function... is the normal way of forEach()
			//annoymous function goes in with the func from above.
//objects... added below is just like forEach() b/c adding 'this'

array.prototype.myForEach = function(func){
	for(var i=0, i<this.length, i++){
		func(this[i]);
	}
}







