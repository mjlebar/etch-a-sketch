"use strict";

const container = document.querySelector(".container");
const button = document.querySelector("button");
console.log(button);

const squares = [];

for (let i = 0; i < 256; i++) {
  console.log("in");
  const newSquare = document.createElement("div");
  newSquare.classList.add("grid");
  container.appendChild(newSquare);
  squares.push(newSquare);
}

for (const square of squares) {
  square.addEventListener("mouseover", (e) =>
    e.target.classList.add("hovered")
  );
}
