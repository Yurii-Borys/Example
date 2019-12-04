"use strict"
const button = document.querySelector('button');

let click = button.addEventListener('click',pre );



let changeText=(function () {
  const text = document.querySelector('p');
  text.style.fontSize="30px";
return {
  
style: function () {
  text.style.fontSize="90px";
  text.style.textAlign="center";
  text.style.color="red";
  text.innerHTML="You do It";
}
}

} ());

function pre () {
  return changeText.style();
}

