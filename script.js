"use strict";

const container = document.querySelector(".container");
const changeGrid = document.querySelector(".setsize");
const squares = [];
const rainbow = document.querySelector(".rainbow");

for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("grid");
  container.appendChild(newSquare);
  squares.push(newSquare);
}

function addListeners(squares, mode = "black") {
  for (const square of squares) {
    square.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = mode)
    );
  }
}

addListeners(squares);

changeGrid.addEventListener("click", newGrid);

function newGrid() {
  const dim = prompt("How many squares per side do you want the grid to have?");
  //   console.log(dim);

  if (dim > 100) {
    alert("Sorry, that is too big! Please pick a number no greater than 100");
    return;
  }

  for (const square of squares) {
    square.remove();
  }
  for (let i = 0; i < dim ** 2; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid");
    container.appendChild(newSquare);
    squares.push(newSquare);
    console.log(576 / dim);
    newSquare.style.height = `${576 / dim - 2}px`;
    newSquare.style.width = newSquare.style.height;
  }
  addListeners(squares);
}

// rainbow.addEventListener('click',
//   changeColor
// )

// function changeColor(color){

// }
