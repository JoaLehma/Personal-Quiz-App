/* Show Answer Button */

console.clear();

let button = document.querySelector('[data-js="button"]');
let text = document.querySelector('[data-js="answer"]');

function onButtonClick() {
  text.classList.toggle("answer__text");
}

button.addEventListener("click", onButtonClick);

button.addEventListener("click", function () {
  /*
  Update the text of the button to toggle beween "More" and "Less" when clicked
  */
  if (button.innerText.toLowerCase() === "hide answer") {
    button.innerText = "Show answer";
  } else {
    button.innerText = "Hide Answer";
  }
});

/* Bookmark Button */

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const bookmarkColor = document.querySelector('[data-js="bookmark--color"]');

function onBookmarkClick() {
  bookmarkColor.classList.toggle("ion_icon--color");
}

bookmarkButton.addEventListener("click", onBookmarkClick);
