// Global Variables
const boxes = document.getElementsByClassName("square");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const myArray = [one, two, three, four, five, six, seven, eight, nine];
const isFull = checkForFull();
let player = 1;
let letter = "X";
let num = 1;
const hasWon = checkForWin(letter);

for (let i of myArray) {
  i.addEventListener(
    "click",
    function () {
      if (player === 1) {
        letter = "X";
        i.style.color = "red";
        i.innerHTML = letter;
        player = 2;
        if (checkForFull()) {
          setTimeout(function () {
            alert("Cats Game!");
            location.reload();
          }, 100);
        } else if (checkForWin(letter)) {
          setTimeout(function () {
            alert(letter + " has won!");
            location.reload();
          }, 100);
        }
      } else {
        letter = "O";
        i.style.color = "black";
        i.innerHTML = letter;
        player = 1;
        if (checkForFull()) {
          setTimeout(function () {
            alert("Cats Game!");
            location.reload();
          }, 100);
        } else if (checkForWin(letter)) {
          setTimeout(function () {
            alert(letter + " has won!");
            location.reload();
          }, 100);
        }
      }
    },
    { once: true }
  );
}

function checkForFull() {
  let i = 0;
  for (let j of myArray) {
    if (j.innerHTML !== "") {
      i += 1;
    }
  }

  if (i < 9) {
    return false;
  } else {
    return true;
  }
}

function checkForWin(le) {
  // Rows
  if (one.innerHTML === le && two.innerHTML === le && three.innerHTML) {
    return true;
  } else if (four.innerHTML === le && five.innerHTML === le && six.innerHTML) {
    return true;
  } else if (
    seven.innerHTML === le &&
    eight.innerHTML === le &&
    nine.innerHTML
  ) {
    return true;
    // Columns
  } else if (one.innerHTML === le && four.innerHTML === le && seven.innerHTML) {
    return true;
  } else if (two.innerHTML === le && five.innerHTML === le && eight.innerHTML) {
    return true;
  } else if (three.innerHTML === le && six.innerHTML === le && nine.innerHTML) {
    return true;
    // Diagonals
  } else if (one.innerHTML === le && five.innerHTML === le && nine.innerHTML) {
    return true;
  } else if (
    three.innerHTML === le &&
    five.innerHTML === le &&
    seven.innerHTML
  ) {
    return true;
  } else {
    return false;
  }
}
