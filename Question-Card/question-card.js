export default function CreateCards() {
  const questionCards = [
    {
      title: "Question 1:",
      question: "What is the best band in the world?",
      answer: "Rage against the machine",
      tags: ["music", "band", "rock", "Zack de la Rocha"],
    },
    {
      title: "Question 2:",
      question: "What is the best film in the world?",
      answer: "In Bruges",
      tags: ["Film", "Bruges", "Colin Farrell", "Black Comedy"],
    },
    {
      title: "Question 3:",
      question: "What is the best food in the world?",
      answer: "Sushi",
      tags: ["Japan", "Fish", "Food", "Healthy"],
    },
  ];

  const main = document.querySelector('[data-js="main"]');

  questionCards.forEach((card, index) => {
    /* Container */
    const container = document.createElement("article");
    container.classList.add("question__card");
    container.setAttribute("data-js", "cardContainer");
    main.append(container);
    /* Bookmark */
    const bookmark = document.createElement("button");
    bookmark.classList.add("bookmark__button");
    container.append(bookmark);
    const icon = document.createElement("p");
    icon.classList.add("ion_icon--color");
    icon.innerHTML = "";
    bookmark.append(icon);
    /* Title */
    const question = document.createElement("h2");
    question.classList.add("question__headline");
    question.innerText = questionCards[index].title;
    container.append(question);
    /* Frage */
    const questionText = document.createElement("p");
    questionText.classList.add("question__text");
    questionText.innerText = questionCards[index].question;
    container.append(questionText);
    /* Button */
    const button = document.createElement("button");
    button.classList.add("answer__button", "hover--effekt");
    button.innerText = "Show Answer";
    button.setAttribute("data-js", "button");
    button.addEventListener("click", () => {
      answerText.classList.toggle("display__none");
      if (button.innerText === "Hide Answer") {
        button.innerText = "Show Answer";
      } else {
        button.innerText = "Hide Answer";
      }
    });

    container.append(button);
    /* Antwort */
    const answerText = document.createElement("p");
    answerText.classList.add("display__none");
    answerText.innerText = questionCards[index].answer;
    answerText.setAttribute("data-js", "answerText");
    container.append(answerText);

    /* Tags */
    const tags = document.createElement("ul");
    tags.classList.add("tags__liste");
    container.append(tags);

    const list = document.createElement("li");
    tags.append(list);

    const buttonList = document.createElement("button");
    buttonList.classList.add("tags__button");
    list.append(buttonList);
    buttonList.innerText = questionCards[index].tags[1];
  });
}
