const button = document.getElementById("btn");

function btnPrompt() {
  button.addEventListener("click", () => {
    prompt("Grid size");
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
