var express = require("express")
	bodyParser = require("body-parser")	
	mongoose = require("mongoose")
	Book = require("./bookModel")
	app = express()
	port = 8080;

var db = "mongodb://localhost/example";

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req,res){
	res.send("Hello there,.... you!");
});

app.get("/books", function(req,res){
	console.log("Look at those books!");
	Book.find({})
		.exec(function(err, books){
			if(err){
				res.send("Danger Will Robinson! (error)");
			} else{
				console.log(books);
				res.json(books);
			}
		});
});

app.get("/books/:id", function(req,res){
	console.log("Getting this book here..");
	Book.findOne({
		_id: req.params.id
	})
	.exec(function(err, book){
		if(err){
			res.send("Oh NO!!! (error)");
		} else{
			console.log(book);
			res.json(book);
		}
	})
});

// POST ROUTES
app.post("/book", function(req,res){
	var newBook = new Book();

	newBook.title = req.body.title;
	newBook.author = req.body.author;
	newBook.category = req.body.category;

	newBook.save(function(err,book){
		if(err){
			res.send("Awe... Man, no book! (error)");
		}else{
			console.log(book);
			res.send(book);
		}
	});
});

//POST ROUTE 2
app.post('/book2', function(req,res){
	Book.create(req.body,function(err, book){
		if(err){
			res.send("Awe... Man, no book! (error)");
		} else{
			console.log(book);
			res.send(book);
		}
	});
});


//UPDATE Routes
app.put("/book/:id", function(req,res){
	Book.findOneAndUpdate({
		_id: req.params.id
	}, 
	{$set: {title: req.body.title}}, 
	{upsert: true},
	function(err,newBook){
		if(err){
			console.log("error occured");
		}else{
		console.log(newBook);
		res.status(204);
		}
	});
});

//DELETE Routes
app.delete("/book/:id", function(req,res){
	book.findOneAndRemove({
		_id: req.params.id
	}, function(err, book){
		if(err){
			res.send("error deleting");
		}else{
			console.log(book);
			res.status(204);
		}
	});
});




app.listen(port, function(){
	console.log("app listening on port " + port);
});

