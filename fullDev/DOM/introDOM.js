				// DOM Manipulation
					//great for games!!
					//Document Object Model		*** everything is in a document. (top level)
	// The Process			*** SELECT an element and then MANIPULATE.
		//SELECT an element
			var h1 = document.querySelector("h1");
		//MANIPULATE.
			h1.style.color = "pink";

			//Harder DOM exercise
			var body = document.querySelector("body"); //SELECT
			var isBlue = false;

			getInterval(function(){ //MANIPULATE
				if (isBlue){
					body.style.background = "white";
				} else {
					body.style.background = "#3498db";
				}
				isBlue = !isBlue;
			}, 1000); //second part is in milliseconds.

// SELECTORS!
	//easy to name.

var para = document.querySelector("p");
var para = document.querySelector(".special");
var para = document.getElementByClass("special")[0];
var para = document.getElementById("#first");
var para = document.getElementByTagName("p")[0];
var para = document.querySelector("h1 + p");

// DOM Manipulation
		//changing elment style.
			// 1. style property. tag.style.color =="blue";
				// ++++++++ use mainly to change things after the user has been on for time.
				var h1 = document.querySelector('h1');
				h1.style.color = "pink";
					//separation of concerns....... dont want a lot of overlap. 
						//structure === HTML
						//Behavior  === Javascript
						//presentation ==== CSS
			// 2. Alternative.
				//CSS class defined. 
					.some-class{
						color: blue;
						border: 10px solid red;
					}

				var tag = document.getElementById("highlight");
					//add the new class to the selected element
				tag.classList.add("some-class");
		//adding/removing classes.
			tag.classList.add("another-class");
			tag.classList.remove("another-class");
			tag.classList.toggle("another-class"); //click it opens. click again close it.
		//changing the content of a tag.
			//textContent	**** doesn't maintain HMTL.
				//select the <p> tag:
				var tag = document.querySelector("p");
				//retrieve the textContent.
				tag.textContent
				//alter the textContent.
				tag.textContent = "blah blah blah";
			//innerHTML	****maintains the html.
				//select the <p> tag:
				var tag = document.querySelector("p");
				tag.innerHTML	//"This is an <strong>awesome</strong> paragraph"
		//changing attributes (src, href, etc.).
				//<a href='www.google.com'>I am a link</a>
				//<img src='logo.png'>
			// getAttribute() and setAttribute()
				var link = document.querySelector("a");
				link.getAttribute("href"); // google.com
				//CHANGE HREF ATTRIBUTE
				link.setAttribute("href", "wwww.dogs.com");
				/// <a href='www.dogs.com'>I am a link.</a>

				//TO CHANGE THE IMAGE SRC
				var img = document.querySelector("img");
				img.setAttribute("src", "corgi.png");
				///<img src="corgi.png">

//Google code along....srcset attribute instead of src attribute.
	var logo = document.querySelector("#hplogo");
	logo.setAttribute("srcset", "new_source");//new_source is just a placeholder.
	//to change the size of the img from the orginal space.
	logo.style.width = "200px";
	logo.style.height = "100px";
	logo.style.border = "2px solid purple";

	//changing the anchor tags.
		var links = document.getElementByTagName("a");

		for (var i=0; i<links; i++){
			links[i].style.background = "pink";
			links[i].style.border = "1px dashed purple";
			links[i].style.color = "orange";
		}
			// to change the link to bing.com not google.com
		for (var i=0; i<links; i++){
			console.log(links[i].getAttribute("href"));
		}
		for (var i=0; i<links; i++){
			links[i].setAttribute("href", "http://www.bing.com");
		}













