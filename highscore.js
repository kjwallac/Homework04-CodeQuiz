const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');


initials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !initials.value;
});

saveHighScore = e => {
    console.log("clicked he button!");
    e.preventDefault();
};