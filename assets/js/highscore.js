let clearScoreButton = document.getElementById("clear-score-button");


clearScoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
});

