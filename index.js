const bookmark = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answerButton"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark-checked");
});

answerButton.addEventListener("click", () => {
  if (!answerButton.getAttribute("checked")) {
    const answer = document.createElement("p");

    answer.innerHTML = "The answer is 'flex-direction'!";
    answer.setAttribute("data-js", "answer-1");
    answerButton.insertAdjacentElement("afterend", answer);
    answerButton.innerHTML = "Hide Answer";
    answerButton.setAttribute("checked", true);
  } else {
    const answer = document.querySelector('[data-js="answer-1"');

    answer.remove();
    answerButton.innerHTML = "Show Answer";
    answerButton.removeAttribute("checked");
  }
});
