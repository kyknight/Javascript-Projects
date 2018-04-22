

// check off specific todos by clicking
$("li").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to delete todo      ***event bubbleing...
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// creating new todos
$("input[type=text]").keypress(function(event){
	if (event.which === 13){ //enterkey
		//grabbing new todo 
		var todoText = $(this).val();
		$(this).val(""); //clears input.
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil").click(function(){
	$("input[type=text]").fadeToggle(); //keeps track of the state.
});



