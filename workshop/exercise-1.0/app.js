// Exercise 1.0
// ------------

const body = document.querySelector("body");
const result = document.getElementById("clickreveal");
function clickEvent() {
  result.innerText = "You've won a prize!";
  body.removeEventListener("click", clickEvent);
}
body.addEventListener("click", clickEvent);
console.log("exercise-1");
