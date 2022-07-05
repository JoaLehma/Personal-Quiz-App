let button = document.querySelector('[data-js="button"]');
let text = document.querySelector('[data-js="answer"]');

function onButtonClick() {
  text.classList.toggle("answer__text");
}

button.addEventListener("click", onButtonClick);
