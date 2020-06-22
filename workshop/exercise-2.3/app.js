// document.querySelectorAll("button").forEach(function (e) {
//     e.addEventListener("click", function () {
//     this.style.backgroundColor = "green";
//     if (button !== "green") {
//         color = "red";
//         document.getElementById("button").style.backgroundColor = "color";
//     else if (button === "green"){
//         color = "red";
//         document.getElementById("button).style.backgroundColor;
//          }
// }
//     }
// });
//How would I solve this using my idea?

let mainDiv = document.getElementById("main");

function toggleColor(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle("green");
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.style.top = `${Math.random() * 60}vh`;
  button.style.left = `${Math.random() * 60}vw`;
  mainDiv.appendChild(button);

  button.addEventListener("click", toggleColor);
}
