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
        question: "Which Git command uploads local repository content to a remote repository?",
        choice1: "Git Pull",
        choice2: "Git Status",
        correct: "Git Push",
        choice3: "Git Checkout"
    },
    {
        question: "Which is the correct JavaScript syntax to print a string?",
        choice1: "consolelog(Hello World);",
        choice2: "Console.Log(Hello World);",
        choice3: "console.log(Hello World);",
        correct: "console.log('Hello World');"
    }
];




// ------------------ GLOBAL VARIABLES ------------------

const startButton = document.getElementById("start-button");
const startQuizContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const nextButtonContainer = document.getElementById("next-button-container");
const nextButton = document.getElementById("next-button");
const initialsInputForm = document.getElementById("initials-input-form");

let allChoices = document.getElementsByClassName("answer-choices");
let choiceOne = document.getElementById("choice1");
let choiceTwo = document.getElementById("choice2");
let choiceThree = document.getElementById("choice3");
let correctAnswer = document.getElementById("correct-answer");


let timer = document.getElementById("timer");
timer = 0

// This is  the first question in the array
let currentQuestionIndex = 0;






// ------------------- FUNCTIONS ------------------------

// This function starts the quiz when start button is clicked
function startQuiz (){
    startQuizContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    choicesContainer.classList.remove("hide");
    nextButtonContainer.classList.remove("hide");
    // set timer
    // timer = 75, make a timer function?
    setQuizTimer();
    shownextQuestion();
};


function setQuizTimer () {
    timer = 75;
    timer.innerHTML = "timer"
}


// This function creates the questions of the quiz
function shownextQuestion () {
    let currentQuestion = questionsArray[currentQuestionIndex];
    if (currentQuestionIndex <= questionsArray.length - 1) {
        questionContainer.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
        choiceOne.innerHTML = "<p>" + currentQuestion.choice1 + "</p>";
        choiceTwo.innerHTML = "<p>" + currentQuestion.choice2 + "</p>";
        choiceThree.innerHTML = "<p>" + currentQuestion.choice3 + "</p>";
        correctAnswer.innerHTML = "<p>" + currentQuestion.correct + "</p>";
        currentQuestionIndex++
    }
    else if (currentQuestionIndex = questionsArray.length) {
        questionContainer.innerHTML = "<h2>" + "ALL DONE! YOUR SCORE IS: " + "</h2>" + "<br/>" + "<h3>" + "Enter your initials below to save score:" + "</h3>";
        nextButtonContainer.classList.add("hide");
        choicesContainer.classList.add("hide");
        initialsInputForm.classList.remove("hide");

        // add anchor to highscore page when submit initials
    } 
};





// ------------ CLICK EVENTS --------------------

// When start button is clicked, the first question appears on the screen and timer starts
startButton.addEventListener("click", startQuiz);

// When next button is clicked, the next question appears or the "Quiz Over" page
nextButton.addEventListener("click", shownextQuestion);







// TO DO:

// Disable next button until answer is selected

// When an answer is selected, time either stays same or decreases, user notified if right/wrong, and next question appears

//When timer is equal to zero, quiz stops and high score will be equal to the time left

//link high score page to submit button and high score link

// Save score to local storage

