document.querySelectorAll(".buttoncolor").forEach(function (e) {
  e.addEventListener("click", function () {
    this.style.backgroundColor = "green";
    if (button !== "green") {
      color = "red";
      document.getElementById("buttoncolor").style.backgroundColor = "color";
      //  //else if (button === "green"){
      //      color = "red"'
      //      document.getElementById("buttoncolor).style.backgroundColor;
      //  }
    }
  });
});

//I tried using an if statement, do I need to use an else if and add another line for it to be red?
