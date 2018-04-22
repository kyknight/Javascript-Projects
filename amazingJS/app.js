// START LIMITED TEXT BOX
var output1 = document.getElementById('output1');
var charCount = 100;//when to show warning
var textLimit = 140;//text limit

var textLimits = document.querySelector('.textLimits');
// textLimits.addEventListener('change', textCounter);
// textLimits.addEventListener('keyup', textCounter);
// textLimits.addEventListener('keydown', textCounter);

textLimits.onkeyup = function(){textCounter();};
textLimits.onkeydown = function(){textCounter();};
textLimits.onchange = function(){textCounter();};

function textCounter(){
	var fieldValue = document.getElementById('tweetText');
	var count = fieldValue.value.length;

	if(count > textLimit){
		fieldValue.value = fieldValue.value.substring(0, textLimit);
	}

	if((charCount - count) < 0){
		output1.classList.add('red');
		output1.classList.remove('black');
	} else{
		output1.classList.add('black');
		output1.classList.remove('red');
	}
	output1.innerHTML = (charCount - count) + ' characters available';
}
// END LIMITED TEXT BOX
//*****************************************

// START CLOSE/OPEN A WINDOW (HISTORY)
function openHistory(){
	console.log(window.history);
	window.history.go(-1);
}
function openWindow(){
	window.open('index.html');
}
function closeWindow(){
	window.close();
}
function bInfo(){//checks the type of browser used
	console.log(navigator);
	var ua = navigator.userAgent;
	if(/Chrome\//.test(ua)){console.log('CHROME FOUND');}
	if(/Firefox\//.test(ua)){console.log('FIREFOX FOUND');}
}
//finds user url and modified time
var output2 = document.getElementById('output2');
var currentDate = new Date(Date()).getTime();
var modifiedDate = new Date(document.lastModified).getTime();
output2.innerHTML = currentDate + '<br>' + modifiedDate 
if((currentDate-1000) < modifiedDate){
	output2.innerHTML = 'NEW';
}else {
	output2.innerHTML = 'OLD';
}
function urlInfo(){
	output2.innerHTML = document.location.href + '<br>'+ document.lastModified;
	document.location.reload(); //reloads entire page...DUH!
}
// END CLOSE/OPEN A WINDOW (HISTORY)
//*****************************************

// START SCROLL BOX
var scrollSpeedx = 10;
var output3 = document.getElementById('output3');
var output4 = document.getElementById('scrollContent');
var output5 = document.getElementById('content');
var contentHeight = 200;

window.onload = setupScroll;

var content = "<h1>Hello World</h1> this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>this is some default text that will scroll up on mouseover<br>";

function setupScroll(){
	output5.style.height = contentHeight + "px";
	output4.style.top = contentHeight + "px";
	output4.innerHTML = content;
	scrollInterval = setInterval('scrollingContent()', 50);
}
function scrollingContent(){
	if(parseInt(output4.style.top) + output4.clientHeight > 0){
		output4.style.top = parseInt(output4.style.top) - scrollSpeedx + 'px'; 
	} else{
		output4.style.top = contentHeight + "px";
	}
	output3.innerHTML = 'content scrolling';
}
function scrollSpeed(ss){
	scrollSpeedx = ss;
	output4.innerHTML = scrollSpeed;
}
// END SCROLL BOX
//*****************************************


