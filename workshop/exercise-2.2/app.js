// function colorChange() {
//   let button = document.getElementById("buttons").style.backgroundColor;
//   let color = "red";
//   if (button !== "red") {
//     color = "red";
//     document.getElementById("buttons").style.backgroundColor = color;
//   } else if (button === "red") {
//     color = "green";
//     document.getElementById("buttons").style.backgroundColor = color;
//   }
// }
// //I tried using an if statement, do I need to use an else if and add another line for it to be red?

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
