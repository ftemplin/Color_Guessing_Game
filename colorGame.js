//alert("connected");
var colors = genrateRandomColors(6);
	
var squares = document.querySelectorAll(".square");
var colorPicked = colorPicked();
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
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change color of a squares
		squares[i].style.backgroundColor = color;
	}
	
}

function colorPicked(){
	var random = Math.floor(Math.random() * colors.length)
	return colors [random];
}