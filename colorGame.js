//alert("connected");
var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(200, 200, 0)",
	"rgb(200, 0, 200)",
	"rgb(0, 200, 200)",
]

var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
}

