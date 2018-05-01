var squares = document.querySelectorAll(".square");
var row = document.querySelectorAll(".container > div");
var frst = document.querySelectorAll(".frst");
var scnd = document.querySelectorAll(".scnd");
var thrd = document.querySelectorAll(".thrd");
var frth = document.querySelectorAll(".frth");
var ffth = document.querySelectorAll(".ffth");
var sxth = document.querySelectorAll(".sxth");
var svnth = document.querySelectorAll(".svnth");
var gth = document.querySelectorAll(".gth");
var nnth = document.querySelectorAll(".nnth");

/*var arrNine = [1,2,3,4,5,6,7,8,9];*/
var boxes = [frst,scnd,thrd,frth,ffth,sxth,svnth,gth,nnth];

// setup an array for rows
var rowArr = [1,2,3,4,5,6,7,8,9];
// setup an array for columns
var col = [1,2,3,4,5,6,7,8,9];
// setup an array for boxes
var box = [1,2,3,4,5,6,7,8,9];

//we need one array of numbers from 1-9 in each box column and row without repetition 


function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


for (var i = 0; i < squares.length; i++) {
		row[i].textContent = rowArr[i];
	};