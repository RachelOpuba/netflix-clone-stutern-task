"use strict";

const accordion = document.querySelectorAll(".question");
console.log(accordion);

let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const awnser = this.nextElementSibling;
    if (awnser.style.display === "block") {
      awnser.style.display = "none";
    } else {
      awnser.style.display = "block";
    }
    if (awnser.style.maxHeight) {
      awnser.style.maxHeight = null;
    } else {
      awnser.style.maxHeight = awnser.scrollHeight + "px";
    }
  });
}
