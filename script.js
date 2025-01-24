const button = document.getElementById("btn");
let userInput = 16;
function btnPrompt() {
  button.addEventListener("click", () => {
    userInput = prompt("Grid size");
    console.log(userInput);
  });
}
btnPrompt();

const container = document.getElementById("container");

function addDiv() {
  for (let i = 0; i < 16 * 16; i++) {
    const newDiv = document.createElement("div");

    newDiv.textContent = "";

    newDiv.addEventListener("mouseover", () => {
      newDiv.style.background = "lightblue";
    });

    container.appendChild(newDiv);
  }
}

addDiv();
