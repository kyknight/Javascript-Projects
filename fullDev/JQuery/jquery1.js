				// jQuery manipulates DOM
					//helps call AJAX.
					//cross-browser support
// Selecting with jQuery
//$("selectorGoesHere") //******** $("img")  === to select all img tags.

//.css("property", "value") // needs the $("selectorGoesHere") before.

//exercise ......
	//select all divs and give background the color purple.
$("div").css("background", "purple");
	//select all divs with class highlight and give width of 200px.
$(".highlight").css("width", "200px");
	//select div with id third give border orange.
$("#third").css("border", "orange");
	//select first div only font color is pink. or first() but slower...
$("div:first-of-type").css("color", "pink");




