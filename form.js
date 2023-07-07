const questionElement = document.querySelector('data-js="question-field"');
const answerElement = document.querySelector('data-js="answer-field"');

const questionLettersLeft = document.querySelector(
  'data-js="questionLettersLeft"'
);
const answerLettersLeft = document.querySelector('data-js="answerLettersLeft"');

function addCharactersLeft(element, count) {
  const maxLength = element.getAttribute("maxLength");
  count.innerText = maxLength;
  element.addEventListener("input", () => {
    count.innerText = maxLength - element.value.length;
  });
}
addCharactersLeft(questionElement, questionLettersLeft);
addCharactersLeft(answerElement, answerLettersLeft);
