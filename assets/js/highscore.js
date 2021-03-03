let scoreList = document.getElementById("score-list");

function addNewScore () {
    let newScore = JSON.parse(localStorage.getItem("Score"));
    let li = document.createElement('li')
    li.textContent = newScore
    scoreList.appendChild(li)
};

addNewScore();

let clearScoreButton = document.getElementById("clear-score-button");


clearScoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    scoreList.removeChild(li);
});

// add function that puts local storage on page 

// call function