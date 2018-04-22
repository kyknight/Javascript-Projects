			// OBJECTS   *** second data structure.
	//objects have no order. but do have keys. **** are not lists.
		//to retrieve data from an object:
				//1. brackets	**** person['name']
				//2. dot notation	**** person.name
		//updating data	**** person['age'] += 1; or person.city = 'London';
		//creating objects....
	//objects can hold all kinds of data.
	// arrays are just special way of objects.

//nested Objects:::::
		//an array with objects...
	var posts = [
		{		//posts[0] -below is an object.
			title: 'Cats',
			author: 'Me',
			comments: ['awe...', 'ewe...']
		},
		{		//posts[1] -below is an object.
			title: 'dogs',
			author: 'you',
			comments: ['ewe...', 'awe...']
		}
	]
	//second comment of the second post.
	posts[1].comments[1];

//Movie Database Exercise movieDB

var movie = [
	{
		title: 'In Bruges', 
		hasWatched: false, 
		rating: 5
	},
	{
		title: 'Frozen', 
		hasWatched: true, 
		rating: 4.5
	}
]
movie.forEach(function(movie){
	console.log(buildString(movie));
});
function buildString(movie){
	var result = 'You have ';
	if( movie.hasWatched){
		result += 'watched ';
	} else {
		result += 'not seen ';
	}
	result += '\'' + movie.title + '\' - ';
	result += movie.rating + ' stars';
	return result;
}

			//Adding methods to objects
				//methods ======= console.log **** console=object log=method
		//Keyword 'this'   underscoreJS
			//comment data stored inside of an object.
var comments = {};
comments.data = ['Yay!', 'Awesome!'];
comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}
//function print(arr){
//	arr.foreach(function(el){
//		console.log(el);
//	});
//}









