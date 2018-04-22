					//jQuery methods
// HTML and CSS
	// .val()
	// .text()
	// .attr()
	// .html()
	// Manipulating Classes
		// .addClass()
		// .removeClass()
		// .toggleClass()
// EFECTS
	// .fadeOut("speed")  ***** on button click div's fade out in one second.
		$("button").on("click", function(){
			$("div").fadeOut(1000, function(){
				$(this).remove(); //callback...
			});
		});
	// .fadeIn("speed")
	// .fadeToggle("speed")	***** knows whether to fadeIn and fadeOut

	// .slideDown() && .slideUp() && .slideToggle()
		$("button").on("click", function(){
			$("div").slideToggle(1000)
		});




