//alert("connected");
var numSquares = 6; 
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
// var numOfSquares = 6; 
var modeButtons = document.querySelectorAll(".mode")

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		// below is optional turenary version of the update code for numsquares
		// this.textContent === "Easy" ? numSquares =3: numSquares = 6;

		// updated the numsquares based on the button selected
		if(this.textContent === "Easy"){
			numSquares = 3;
		}else{
			numSquares = 6;
		}
		reset();
		// figure out number of squares
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes

	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new color
	colorPicked = pickColor();
	//change color display to match pickedcolor
	colorDisplay.textContent = colorPicked;
	
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	//Change colors of the squares
	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	
	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	// alert("Easy button clicked");
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	colorPicked = pickColor();
// 	colorDisplay.textContent = colorPicked;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	//alert("hard button clicked");
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	colorPicked = pickColor();
// 	colorDisplay.textContent = colorPicked;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	});



resetButton.addEventListener("click", function(){
	//alert("Clicked Reset Button");
	//Generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new color
	colorPicked = pickColor();
	//change color display to match pickedcolor
	colorDisplay.textContent = colorPicked;
	//Change colors of the squares
	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
});

colorDisplay.textContent = colorPicked;


for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listener for squares
	squares[i].addEventListener("click", function(){
		// alert("square clicked!");
		// grab color of picked color
		var clickedColor = this.style.backgroundColor;
		//compare the clicked color to the picked color
		if(clickedColor === colorPicked){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
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

function pickColor(){
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
