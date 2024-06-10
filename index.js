const body = document.querySelector("body");
const heading = document.createElement("h1");
const container = document.createElement("div");
const btn = document.createElement("button");

heading.textContent = "Etch-a-Sketch";
btn.textContent = "Choose grid dimension";

body.appendChild(heading);
body.appendChild(btn);
body.appendChild(container);

btn.addEventListener("click", () => {
  const dimension = +prompt("Enter your preferred grid dimension:");
  for (let i = 0; i < dimension; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
});
