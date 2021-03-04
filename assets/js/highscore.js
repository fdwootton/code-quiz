let scoreList = document.getElementById("score-list");

let allScores = localStorage.getItem("scores");
allScores = JSON.parse(allScores);

function addNewScore () {
    for (var i=0; i<allScores.length; i++) {
        let li = document.createElement("div");
        li.textContent = allScores[i].name + "---" + allScores[i].score;
        scoreList.appendChild(li)
    }  
};

addNewScore();


let clearScoreButton = document.getElementById("clear-score-button");

clearScoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    document.body.removeChild(scoreList);
});
