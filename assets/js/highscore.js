let scoreList = document.getElementById("score-list");

function addNewScore () {
    let newScore = JSON.parse(localStorage.getItem("scores"));
    let li = document.createElement('li')
    li.textContent = newScore
    scoreList.appendChild(li)
};

addNewScore();


let clearScoreButton = document.getElementById("clear-score-button");

clearScoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    document.body.removeChild(scoreList);
});
