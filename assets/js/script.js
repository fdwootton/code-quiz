const questionsArray = [
    {
        question: "Which is NOT a primitive type?",
        answers: [
            {choice: "Number", correct: false},
            {choice: "Wire Frame", correct: true},
            {choice: "String", correct: false},
            {choice: "Boolean", correct: false}
        ]
    },
    {
        question: "API stands for: ",
        answers: [
            {choice: "Application Programming Interface", correct: true},
            {choice: "Apple Program Interactives", correct: false},
            {choice: "Angular Project IDE", correct: false},
            {choice: "Algorithm Pair Inheritance", correct: false}
        ]
    }
]

// When page loads, have initial question box

// When click start button, timer starts and new question box

const startButton = document.getElementById("start-button");
const startQuizContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");

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

// question container if true, backgroung green, then go to next question
// if false then say wrong and 

// remove this question from array 
