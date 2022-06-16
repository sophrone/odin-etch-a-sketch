const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const gridSize = document.querySelector(".grid-size");
const rainbowBtn = document.querySelector(".rainbow");
const blackBtn = document.querySelector(".black");
const eraseBtn = document.querySelector(".erase");
let isBlack = true;

rainbowBtn.addEventListener("click", () => {
  let color = "rainbow";
  setColor(color);
});

blackBtn.addEventListener("click", () => {
  let color = "black";
  setColor(color);
});

eraseBtn.addEventListener("click", () => {
  let color = "erase";
  setColor(color);
});

sizingGrid(16);
creatingDivs(16);

function sizingGrid(grid) {
  container.style.setProperty("--grid-rows", grid);
  container.style.setProperty("--grid-cols", grid);
}

gridSize.addEventListener("click", function () {
  let size = prompt("Grid size? 0-64");
  if (size > 64) {
    delGrid();
    sizingGrid(16);
    creatingDivs(16);
    return alert("Please enter a number below 64");
  }
  delGrid();
  sizingGrid(size);
  creatingDivs(size);
});

function delGrid() {
  container.innerHTML = "";
}

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}

function creatingDivs(grid) {
  for (let i = 0; i < grid * grid; i++) {
    let divs = document.createElement("div");
    divs.classList.add("divs");
    container.appendChild(divs);
  }
}

function setColor(color) {
  const divs = document.querySelectorAll("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover", function (e) {
      if (color == "black") {
        e.target.style.backgroundColor = "black";
      } else if (color == "rainbow") {
        e.target.style.backgroundColor = randomColor();
      } else {
        e.target.style.backgroundColor = "rgba(255, 255, 246, 0.877)";
      }
    });
  }
}

resetBtn.addEventListener("click", clear);
function clear() {
  const allDivs = document.querySelectorAll(".divs");
  allDivs.forEach((allDivs) => {
    allDivs.style.backgroundColor = "rgba(255, 255, 246, 0.877)";
  });
}
