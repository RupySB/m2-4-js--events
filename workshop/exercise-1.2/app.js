// Exercise 1.2
// ------------

let body = document.querySelector("body");
let result = document.getElementById("result");
let youWin = false;
let time = Math.ceil(Math.random() * 4);
document.getElementById("time").innerText = time;

function clickEvent() {
  youWin = true;
  result.innerText = "You Win!";
  body.removeEventListener("click", clickEvent);
}
setTimeout(function () {
  if (!youWin) {
    result.innerText = "You Lose";
    body.removeEventListener("click", clickEvent);
  }
}, time * 1500);
console.log(time);
body.addEventListener("click", clickEvent);

//how do I change it so I can have a range for the time?
