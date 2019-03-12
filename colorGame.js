//alert("connected");
var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(200, 200, 0)",
	"rgb(200, 0, 200)",
	"rgb(0, 200, 200)"
]
var squares = document.querySelectorAll(".square");
var colorPicked = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = colorPicked;


for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listener for squares
	squares[i].addEventListener("click", function(){
		//alert("square clicked!");
		// grab color of picked color
		var clickedColor = this.style.backgroundColor;
		//compare the clicked color to the picked color
		if(clickedColor === colorPicked){
			alert("correct");
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

