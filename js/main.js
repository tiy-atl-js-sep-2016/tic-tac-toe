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
