"use strict";

const container = document.querySelector(".container");
const button = document.querySelector("button");
const squares = [];

for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("grid");
  container.appendChild(newSquare);
  squares.push(newSquare);
}

function addListeners(squares) {
  for (const square of squares) {
    square.addEventListener("mouseover", (e) =>
      e.target.classList.add("hovered")
    );
  }
}

addListeners(squares);

button.addEventListener("click", newGrid);

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
