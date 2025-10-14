const form = document.querySelector(".form");
const numBtns = document.querySelectorAll(".num");
const ratingBlock = document.querySelector(".rating");
const confirmationBlock = document.querySelector(".confirmation");
const infoScore = document.querySelector(".infoScore");

let selectedScore = null;

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    numBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedScore = btn.dataset.score;
    infoScore.textContent = selectedScore;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!selectedScore) return;
  ratingBlock.classList.add("hidden");
  confirmationBlock.classList.remove("hidden");
});
