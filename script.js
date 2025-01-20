const container = document.getElementById("container");

function addDiv() {
  for (let i = 0; i < 16 * 16; i++) {
    const newDiv = document.createElement("div");

    newDiv.textContent = "";

    container.appendChild(newDiv);
  }
}

addDiv();
