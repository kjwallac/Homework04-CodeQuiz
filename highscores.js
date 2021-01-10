const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.initials} - ${score.score}</li>`;
  })
  .join("");

function testFind() {
  const a = [1, 2, 3];
  const result = a.find(function (number) {
    if (number === 3) {
      return true;
    }
    return false;
  });
  return result;
}
function testFindWithLambda() {
  const a = [1, 2, 3];
  const result = a.find((n) => n == 3);
  return result;
}
