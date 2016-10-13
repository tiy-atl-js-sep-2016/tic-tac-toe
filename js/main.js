var currentPlayer = "X";

function switchPlayer () {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
};

var board = ['', '', '', '', '', '', '', '', ''];

var board2 = ['X', '', 'X', 'X', 'O', 'O', 'O', 'O', ''];

function renderSpace (space) {
  if (space === 'X') {
    return `<div class="space red"></div>`;
  } else if (space === 'O') {
    return `<div class="space blue"></div>`;
  } else {
    return `<div class="space"></div>`;
  }
};

function render (board) {
  var spacesHtml = [];

  for (var i = 0; i < board.length; i++) {
    var newHtml = renderSpace(board[i]);
    spacesHtml.push(newHtml);
  }

  return `
    <div class="board">${spacesHtml.join("")}</div>
  `;
};

var newHtml = render(board2);
$(".board-container").html(newHtml);

setTimeout(function () {
  $(".board-container").html(render(board));
}, 3000);

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

function toggleColor (event) {
  var target = $(event.target);
  var playerClass;

  if (currentPlayer === "X") {
    playerClass = "red";
  } else {
    playerClass = "blue";
  }

  target.toggleClass(playerClass);
};

$(".space").click(toggleColor);
