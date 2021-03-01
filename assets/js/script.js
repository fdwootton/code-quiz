// These are all the questions in the quiz
const questionsArray = [
    {
        question: "Which is NOT a primitive type?",
        choice1: "Number",
        correct: "Function",
        choice2: "String",
        choice3: "Boolean"
    },
    {
        question: "API stands for:",
        correct: "Application Programming Interface",
        choice1: "Apple Program Interactive",
        choice2: "Angular Project IDE",
        choice3: "Algorithm Pair Inheritance"
    },
    {
        question: "JavaScript is a:",
        choice1: "command line terminal",
        correct: "programming language",
        choice2: "font family",
        choice3: "box model"
    },
    {
        question: "Which Git command uploads local content to a remote repository?",
        choice1: "Git Pull",
        choice2: "Git Status",
        correct: "Git Push",
        choice3: "Git Checkout"
    },
    {
        question: "Which tag is used to link JavaScript to html?",
        choice1: "<link>",
        choice2: "<href>",
        choice3: "<anchor>",
        correct: "<script>"
    }
];




// ------------------ GLOBAL VARIABLES ------------------

const startButton = document.getElementById("start-button");
const startQuizContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const initialsInputForm = document.getElementById("initials-input-form");

let allChoices = document.getElementsByClassName("answer-choice");
let choiceOne = document.getElementById("choice1");
let choiceTwo = document.getElementById("choice2");
let choiceThree = document.getElementById("choice3");
let correctAnswer = document.getElementById("correct-answer");


const timer = document.getElementById("timer");
let gameClock = 75;
let timerID;


// This is the first question in the array
let currentQuestionIndex = 0;






// ------------------- FUNCTIONS ------------------------

function setQuizTimer () {
    timer.textContent = gameClock;
};

function countdown () {
    gameClock--;
    if (gameClock <= 0) {
        clearInterval(timerID);
        gameClock = 0; 
        questionContainer.innerHTML = "<h2>" + "ALL DONE! YOUR SCORE IS: " + gameClock + "</h2>" + "<br/>" + "<h3>" + "Enter your initials below to save score:" + "</h3>";
        choicesContainer.classList.add("hide");
        initialsInputForm.classList.remove("hide");
        clearInterval(timerID);
        }
    setQuizTimer();
}

// This deducts 10 seconds from the game clock when the user gets an answer wrong
function timePenalty () {
    gameClock -= 10;
}

// This function starts the quiz when start button is clicked
function startQuiz (){
    startQuizContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    choicesContainer.classList.remove("hide");
    timerID = setInterval(countdown, 1000);
    setQuizTimer();
    renderNextQuestion();
};

function handleQuizClick (event) {
    if (event.target.getAttribute("class") == "answer-choice" && event.target.getAttribute("id") == "correct-answer") {
        renderNextQuestion();
    }
    else if (event.target.getAttribute("class") != "answer-choice") {
        return;
    }
    else {
        timePenalty();
    }
}



// This function creates the questions of the quiz
function renderNextQuestion () {
    let currentQuestion = questionsArray[currentQuestionIndex];
    if (currentQuestionIndex <= questionsArray.length - 1) {
        questionContainer.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
        choiceOne.textContent = currentQuestion.choice1;
        choiceTwo.textContent = currentQuestion.choice2;
        choiceThree.textContent = currentQuestion.choice3;
        correctAnswer.textContent = currentQuestion.correct;
        currentQuestionIndex++
    }
    else if (currentQuestionIndex = questionsArray.length) {
        questionContainer.innerHTML = "<h2>" + "ALL DONE! YOUR SCORE IS: " + gameClock + "</h2>" + "<br/>" + "<h3>" + "Enter your initials below to save score:" + "</h3>";
        choicesContainer.classList.add("hide");
        initialsInputForm.classList.remove("hide");
        clearInterval(timerID);
    } 
};



// ------------ CLICK EVENTS --------------------

// When start button is clicked, the first question appears on the screen and timer starts
startButton.addEventListener("click", startQuiz);

// When next button is clicked, the next question appears or the "Quiz Over" page
// nextButton.addEventListener("click", shownextQuestion);

choicesContainer.addEventListener("click", handleQuizClick);






// TO DO:

// Make wrong answer red, or say wrong

// When an answer is selected, time either stays same or decreases, user notified if right/wrong, and next question appears

//When timer is equal to zero, quiz stops and high score will be equal to the time left

//link high score page to submit button and high score link

// Save score to local storage