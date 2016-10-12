// changeColor is normal Javascript
function changeColor (event) {
  var target = event.target;
  var randomNumber = Math.floor(Math.random() * 4095);
  var randomColor = `#${randomNumber.toString(16)}`;

  target.style.color = randomColor;
};

// This is jQuery stuff
var heading = $("#heading");
heading.click(changeColor);

// This is the same as the above two lines
// $("#heading").click(changeColor);

var currentPlayer = "X";

function switchPlayer () {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function toggleColor (event) {
  var target = event.target;
  var playerClass;

  if (currentPlayer === "X") {
    playerClass = "red";
  } else {
    playerClass = "blue";
  }

  target.toggleClass(playerClass);
}

$(".space").click(toggleColor);
