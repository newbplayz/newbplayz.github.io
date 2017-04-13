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


});//closing bracket for killing squidward game


$(document).on("pagecreate","#secondgame",function(event){

var start = document.getElementById("starting");

start.addEventListener('click', function() {
    var intro = prompt("who lives in a pineapple under the sea?");

    if (intro === "spongebob squarepants") {
        alert("correct");
    } else if (intro === "sea cucumber") {
        alert("close");
    } else {
        alert("wrong");
    }

    var q1 = prompt(" what does food taste like?")

    if (q1 === "sand") {
        alert("correct");
    } else if (q1 === "floor") {
        alert("close");
    } else {
        alert("wrong");
    }

    var q2 = prompt("what is a head made of?")

    if (q2 === "stone") {
        alert("correct");
    } else if (q2 === "rock") {
        alert("sooooo close");
    } else {
        alert("wrong");
    }

    var q3 = prompt("was spongebob ever on the surface?")

    if (q3 === "yes") {
        alert("correct");
    } else if (q3 === "maybe") {
        alert("nuuuuuuh");
    } else {
        alert("wrong");
    }

    var q4 = prompt("is patrick a genius?")

    if (q4 === "he is brain-less") {
        alert("your a genius!");
    } else if (q4 === "no") {
        alert("well i guess not.");
    } else {
        alert("wrong");
    }

    var q5 = prompt("is spongebob a spatula lover?")

    if (q5 === "yes") {
        alert("yeah boiiiiii");
    } else if (q5 === "he uses his spatula") {
        alert("well i guess he does");
    } else {
        alert("wrong");
    }

    var q6 = prompt("what do instruments taste like?")

    if (q6 === "mayonnaise") {
        alert("wow,youre good");
    } else if (q6 === "metal") {
        alert("its made of metal duuude");
    } else {
        alert("wrong");
    }
});

});//closing bracket for killing squidward game
