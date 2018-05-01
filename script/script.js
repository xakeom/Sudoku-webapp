var squares = document.querySelectorAll(".square");
var frst = document.querySelectorAll(".frst");
var scnd = document.querySelectorAll(".scnd");
var thrd = document.querySelectorAll(".thrd");
var frth = document.querySelectorAll(".frth");
var ffth = document.querySelectorAll(".ffth");
var sxth = document.querySelectorAll(".sxth");
var svnth = document.querySelectorAll(".svnth");
var gth = document.querySelectorAll(".gth");
var nnth = document.querySelectorAll(".nnth");

var arrNine = [1,2,3,4,5,6,7,8,9];
var boxes = [frst,scnd,thrd,frth,ffth,sxth,svnth,gth,nnth];

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


function numArr(arr) {
	shuffle(arrNine);
	for (var i = 0; i < arrNine.length; i++) {
		arr[i].textContent = arrNine[i];
	}
}



numArr(frst);
numArr(scnd);
numArr(thrd);
numArr(frth);
numArr(ffth);
numArr(sxth);
numArr(svnth);
numArr(gth);
numArr(nnth);