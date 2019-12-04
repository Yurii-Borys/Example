"use strict"
const burger=document.querySelector('#burger');
const nav= document.querySelector('#navbar');
burger.addEventListener('click', move);
function move() {
  nav.classList.toggle("decoration");
}



