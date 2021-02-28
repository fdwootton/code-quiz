// These are all the questions in the quiz
const questionsArray = [
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

// ------------------ GLOBAL VARIABLES ------------------

const startButton = document.getElementById("start-button");
const startQuizContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const nextButtonContainer = document.getElementById("next-button-container");
const nextButton = document.getElementById("next-button");
let choiceOne = document.getElementById("choice1");
let choiceTwo = document.getElementById("choice2");
let choiceThree = document.getElementById("choice3");
let correctAnswer = document.getElementById("correct-answer");

let timer = document.getElementById("timer");
timer = 0

// This is  the first question in the array
let currentQuestionIndex = 0;

// This is the last question in the array
let lastQuestionIndex = questionsArray.length - 1;


// ------------------- FUNCTIONS ------------------------

// This function starts the quiz when start button is clicked
function startQuiz (){
    startQuizContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    choicesContainer.classList.remove("hide");
    nextButtonContainer.classList.remove("hide");
    // timer.innerHTML = "Timer: 75";
};


// This function creates the questions of the quiz
function shownextQuestion () {
    let currentQuestion = questionsArray[currentQuestionIndex];
    questionContainer.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
    choiceOne.innerHTML = "<p>" + currentQuestion.choice1 + "</p>";
    choiceTwo.innerHTML = "<p>" + currentQuestion.choice2 + "</p>";
    choiceThree.innerHTML = "<p>" + currentQuestion.choice3 + "</p>";
    correctAnswer.innerHTML = "<p>" + currentQuestion.correct + "</p>";
    currentQuestionIndex++
};


// ------------ CLICK EVENTS --------------------

// When start button is clicked, the first question appears on the screen and timer starts
startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", shownextQuestion);


// TO DO:

// When an answer is selected, time either stays same or decreases, user notified if right/wrong, and next question appears


//When timer is equal to zero, quiz stops and high score will be equal to the time left


//High score page pops up with text box and input is saved to local storage