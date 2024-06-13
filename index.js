import setHexColor from "./utils/colors";

const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  container.innerHTML = ""; // Clears grid on each button click
  const dimension = +prompt("Enter your preferred grid dimension:");

  for (let i = 0; i < dimension; i++) {
    const div = document.createElement("div");
    container.appendChild(div);

    for (let j = 0; j < dimension; j++) {
      const innerDiv = document.createElement("div");
      innerDiv.setAttribute("class", "innerDiv");
      div.appendChild(innerDiv);
    }
  }
});