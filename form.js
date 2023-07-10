const questionElement = document.querySelector('[data-js="question-field"]');
const answerElement = document.querySelector('[data-js="answer-field"]');
const tagElement = document.querySelector('[data-js="tag-field"]');
const questionLettersLeft = document.querySelector(
  '[data-js="questionLettersLeft"]'
);
const answerLettersLeft = document.querySelector(
  '[data-js="answerLettersLeft"]'
);

function addCharactersLeft(inputElement, countElement) {
  const maxLength = inputElement.maxLength;
  countElement.innerText = "You have " + maxLength + " characters left.";
  inputElement.addEventListener("input", () => {
    countElement.innerText =
      "You have " +
      (maxLength - inputElement.value.length) +
      " characters left.";
  });
}
addCharactersLeft(questionElement, questionLettersLeft);
addCharactersLeft(answerElement, answerLettersLeft);
