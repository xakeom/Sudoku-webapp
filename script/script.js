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

// generate random number between 1-9 function (no repetition)
function generateRan(){
    var max = 9;
    var random = [];
    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max+1);
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else
         i--;
    }
    console.log(random);
}

generateRan();

for (var i = 0; i < squares.length; i++) {
		squares[i].textContent = generateRan();
	};