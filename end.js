const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentScore;

localStorage.setItem("highScores", JSON.stringify([]));

initials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !initials.value;
});

saveHighScore = e => {
    console.log("clicked he button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        initials: initials.value
    };
    //add scores to the array, sort highest to lowest, splice out the lowest score after 5 scores
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("index.html");
};