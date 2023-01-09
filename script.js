const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-box");
  container.append(div);
}

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

const divs = document.querySelectorAll(".grid-box");

divs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = randomRGB();
  });
});
