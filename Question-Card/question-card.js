export default function CreateCards() {
  const questionCards = [
    {
      title: 'Question 1:',
      question: 'What is the best band in the world?',
      answer: 'Rage against the machine',
      tags: ['music', 'band', 'rock', 'Zack de la Rocha'],
    },
    {
      title: 'Question 2:',
      question: 'What is the best film in the world?',
      answer: 'In Bruges',
      tags: ['Film', 'Bruges', 'Colin Farrell', 'Black Comedy'],
    },
    {
      title: 'Question 3:',
      question: 'What is the best food in the world?',
      answer: 'Sushi',
      tags: ['Japan', 'Fish', 'Food', 'Healthy'],
    },
  ];

  const main = document.querySelector('[data-js="main"]');

  questionCards.forEach(card => {
    /* Container */
    const container = document.createElement('article');
    container.classList.add('question__card');
    container.setAttribute('data-js', 'cardContainer');
    main.append(container);

    /* Bookmark */
    const bookmark = document.createElement('button');
    bookmark.classList.add('bookmark__button', 'hover--effekt');
    bookmark.innerHTML = `
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
    </svg>
    `;
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('bookmark__button--active');
    });
    container.append(bookmark);

    /* Title */
    const question = document.createElement('h2');
    question.classList.add('question__headline');
    question.innerText = card.title;
    container.append(question);
    /* Question */
    const questionText = document.createElement('p');
    questionText.classList.add('question__text');
    questionText.innerText = card.question;
    container.append(questionText);
    /* Button */
    const button = document.createElement('button');
    button.classList.add('answer__button', 'hover--effekt');
    button.innerText = 'Show Answer';
    button.setAttribute('data-js', 'button');
    button.addEventListener('click', () => {
      answerText.classList.toggle('display__none');
      if (button.innerText === 'Hide Answer') {
        button.innerText = 'Show Answer';
      } else {
        button.innerText = 'Hide Answer';
      }
    });

    container.append(button);
    /* Answer */
    const answerText = document.createElement('p');
    answerText.classList.add('display__none');
    answerText.innerText = card.answer;
    answerText.setAttribute('data-js', 'answerText');
    container.append(answerText);

    /* Tags */
    const tags = document.createElement('ul');
    tags.classList.add('tags__list');
    container.append(tags);

    card.tags.forEach(tag => {
      const newTag = document.createElement('button');
      newTag.innerText = tag;
      newTag.classList.add('tags__button');
      tags.append(newTag);
    });
  });
}
