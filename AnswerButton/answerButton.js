export default function AnswerButton() {
  /* Ausklappen der Antwort-Area */

  const button = document.querySelector('[data-js="button"]');
  const text = document.querySelector('[data-js="answer"]');

  function onButtonClick() {
    text.classList.toggle("answer__text");
  }

  /* Text switch zwischen Show and Hide Answer */

  button.addEventListener("click", onButtonClick);

  button.addEventListener("click", function () {
    if (button.innerText === "Hide Answer") {
      button.innerText = "Show answer";
    } else {
      button.innerText = "Hide Answer";
    }
  });
}
