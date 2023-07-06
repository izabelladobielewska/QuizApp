const bookmark = document.querySelector('data-js="bookmark"');
console.log(bookmark);

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle(bookmark - checked);
});

answerButton.addEventListener("click", () => {
  event.preventDefault();
  const newEntry = document.createElement("p");
  answerButton.append(newEntry);
  newEntry.textContent = "There are no answers.";
});

const answerButton = document.querySelector('data-js="answerButton"');
