					//Scope  -context that the code is executed in.

// functions have their own vars in their scopes. as long as it is defined in the function.
//			if you define a var outside of a function and call it in the function, it works.


					// higher order functions 
//-TAKES a function as an arguement or RETURNS another function.

function sing(){
	console.log('Twinkle twinkle...');
	console.log('How I wonder...');
}

setInterval (sing, 1000); //calls sing function at 1000 milliseconds. (1s)

//anonymous function
setInterval(function(){
	console.log('I am an anonymous function!');
	console.log('This is great!');
}, 2000);

