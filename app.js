const board = document.querySelector("#board");
const colors = [
  "#FFFFE0",
  "#FFFF00",
  "#FF6600",
  "#FF3333",
  "#FF99CC",
  "#FF0099",
  "#6699FF",
  "#0066FF",
  "#66CCFF",
  "#99FF99",
  "#66CC33",
];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = gerRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function gerRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
