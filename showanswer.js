let button = document.querySelector('[data-js="button"]');

function onButtonClick() {
  console.log("button clicked!");
}

button.addEventListener("click", onButtonClick);
