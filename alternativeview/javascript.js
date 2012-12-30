//the javascript file for all the other html pages
//this function is called when the HTML DOM event onload is initiated
window.onload=initAll;
function initAll() { 
	document.getElementById("nextLink").onclick=function(){
	newSlide(1);
	}
	document.getElementById("prevLink").onclick=function(){
	newSlide(-1);
	}
	ShowDate
}
var currImg = 1;
function newSlide(direction) {
	var imgCt = 9;
	currImg = currImg + direction;
	if (currImg < 1) {
		currImg = imgCt-1;
	}
	if (currImg == imgCt) {
		currImg = 1;
	}
	document.getElementById("slideshow").src = "../images/" + currImg + ".jpg";
	
}







//shows current date in the top right hand corner of each page
function ShowDate(){
	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
	document.write(day+"/"+month+"/"+year)
}
