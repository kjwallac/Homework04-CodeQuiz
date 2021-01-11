const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearHighScores = document.getElementById("clearHighScores");

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.initials} - ${score.score}</li>`;
  })
  .join("");

clearHighScores.addEventListener("click", function () {
  localStorage.clear();
  highScoresList.innerHTML = "";
});
