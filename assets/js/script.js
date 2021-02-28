// These are all the questions in the quiz
const questionsArray = [
    {
        question: "Which is NOT a primitive type?",
        choice1: "Number",
        correct: "Wire Frame",
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
        question: "Variables may NOT be declared with:",
        choice1: "const",
        choice2: "let",
        choice3: "var",
        correct: "if"
    }
];

// When page loads, have initial question box

// When click start button, timer starts and new question box

const startButton = document.getElementById("start-button");
const startQuizContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");

let allChoices = document.getElementsByClassName("answer-choice");

let timer = document.getElementById("timer");
timer = 0

function shuffleQuestions () {}

function startQuiz () {}

function chooseAnswer () {}

function changeQuestion () {}

startButton.addEventListener("click", function() {
    startQuizContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
});

allChoices.addEventListener("click", function () {
    console.log("hello");
})


// question container if true, backgroung green, then go to next question
// if false then say wrong and 

// remove this question from array 