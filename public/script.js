"use strict";
let hamburger = document.querySelector(".hamburger");
let btn = document.querySelector("button");
let menu = document.getElementById("menu");

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  menu.classList.toggle("show");
});
