const mainDiv = document.getElementById("main");

function toggleColor(event) {
  console.log("click"); //just to make sure everything works
  const theButton = document.getElementById(event.target.id); //this targets what you're touching
  theButton.classList.toggle("dark-mode");
}

for (let number = 1; number <= 20; number++) {
  const button = document.createElement("button");
  button.innerText = number;
  button.id = number;
  button.classList.add("button");
  button.addEventListener("click", toggleColor);
  mainDiv.appendChild(button);
}
