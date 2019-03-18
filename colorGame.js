//alert("connected");
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorPicked = colorPicked();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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
			h1.style.backgroundColor = clickedColor;
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

function generateRandomColors(num){
	//make array
	var arr = []
	// add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		//get random color and push to array
	}
	//return array
return arr;
}

function randomColor(){
	//pick a red 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green 0-255
	var g = Math.floor(Math.random() * 256);
	//pick blue 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b + ")";
}
