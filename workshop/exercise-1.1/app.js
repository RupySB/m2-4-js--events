// Exercise 1.1
// ------------

let body = document.querySelector("body");
let result = document.getElementById("result");
let clickedFast = false;

// The 'click' function
function clickEvent() {
  clickedFast = true;
  result.innerText = "You Win!";
  body.removeEventListener("click", clickEvent);
}
setTimeout(function () {
  if (!clickedFast) {
    result.innerText = "You Lose!";
    body.removeEventListener("click", clickEvent);
  }
}, 1500);
body.addEventListener("click", clickEvent);
//console.log("exercise 1.1");
