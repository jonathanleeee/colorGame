var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickColor;

for (var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add listners to squares
	squares[i].addEventListener("click", function(){

		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if(clickedColor === pickColor) {
			messageDisplay.textContent = "Correct!";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//loop through all suqares
	for (var i = 0; i < colorss.length; i++){
		//change each color to match given color
		colors.style.backgroundColor = color;
	}

}