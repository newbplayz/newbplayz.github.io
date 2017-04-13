$(document).on("pagecreate","#gameScreen",function(event){


var reset = document.getElementById('reset');
var score = 0;
var points = document.getElementById('zierero');

// reset button
reset.addEventListener('click',function(){
score = 0;
points.innerHTML = score;
});


$('.squidward').on('click', function() {
	score = score +1;
	points.innerHTML = score;

});


$('.spongebob').on('click', function() {
	score = score -1;
	points.innerHTML = score;

});










});//closing bracket for ALL the game code
