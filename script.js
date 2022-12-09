const grid = document.querySelector(".container"); //the grid grid for the squares
const changeGrid = document.querySelector(".setsize"); //button to create a new grid
const clearGrid = document.querySelector(".clear"); //button to clear the grid out
const squares = []; //array to keep track of all the squares

for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement("span");
  newSquare.classList.add("pixel");
  grid.appendChild(newSquare);
  squares.push(newSquare);
} //populates the grid with squares

function addListeners(squares) {
  for (const square of squares) {
    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = "black")
    );
  }
} //allows us to turn the squares black by rolling over them. We make a general function so we can re-use it every time we make a new grid

addListeners(squares);

changeGrid.addEventListener("click", newGrid); //allows us to create a new grid with whatever dimension we choose

//Allows the user to create a new grid of dimensions up to 100 x 100; the grid itself doesn't change size, rather, the more squares there are the smaller each square is
function newGrid() {
  const dim = prompt("How many squares per side do you want the grid to have?");

  if (dim > 100) {
    alert("Sorry, that is too big! Please pick a number no greater than 100");
    return;
  }

  for (const square of squares) {
    square.remove();
  } //deletes the already existing squares from the grid to make room for new ones

  for (let i = 0; i < dim ** 2; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("pixel");
    grid.appendChild(newSquare);
    squares.push(newSquare); //sets up new squares

    newSquare.style.height = `${576 / dim - 2}px`;
    newSquare.style.width = newSquare.style.height; //makes sure squares are sized correctly - 576 px is the height of and width of the grid. We subtract 2 from the size to leave room for the borders
  }
  addListeners(squares); //makes sure we can roll over squares to turn them black
}

clearGrid.addEventListener("click", () => {
  for (const square of squares) {
    square.style.backgroundColor = "white";
  }
}); //resets the grid colors
