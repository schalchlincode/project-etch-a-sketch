const container = document.getElementById("container");

function addDiv() {
  for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");

    newDiv.textContent = "I'm a new div!";

    container.appendChild(newDiv);
  }
}

addDiv();
