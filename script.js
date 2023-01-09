const container = document.querySelector(".container");
const gridBtn = document.querySelector("button");
const containerWidth = container.offsetWidth - 6;
let gridNumber = 4;

const randomRGB = () => {
  const colorArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += colorArray[Math.floor(Math.random() * 15)];
  }
  return hexCode;
};

const createDiv = (number) => {
  for (let i = 0; i < number ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-box");
    div.style.width = `${containerWidth / gridNumber}px`;
    div.style.height = `${containerWidth / gridNumber}px`;
    container.append(div);
  }
};
const getDivColor = () => {
  const divs = document.querySelectorAll(".grid-box");

  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = randomRGB();
    });
  });
};

createDiv(gridNumber);
getDivColor();

gridBtn.addEventListener("click", () => {
  let number = +prompt("Enter your number");
  if (typeof number !== "number" || number >= 100 || number <= 4) {
    alert("Please enter a valid number between 4 and 100");
  } else {
    container.innerHTML = "";
    gridNumber = number;
  }
  createDiv(gridNumber);
  getDivColor();
});
