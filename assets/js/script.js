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


const startButton = document.getElementById("start-button");
const startQuizContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");


let timer = document.getElementById("timer");
timer = 0

// This is the index of the first question on the page
let currentQuestionIndex = 0;

// This is the index of the last question
let lastQuestionIndex = questionsArray.length - 1;



// This function starts the quiz when start button is clicked
function startQuiz (){
    startQuizContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    choicesContainer.classList.remove("hide");
    timer.innerHTML = "Timer: 75";
};


// This function creates the questions of the quiz
function nextQuestion () {
    let currentQuestion = questionsArray[currentQuestionIndex];
    questionContainer.innerHTML = "<p>"+ currentQuestion.question +"</p>";
    questionContainer.innerHTML = currentQuestion.choice1;
    choiceTwo.innerHTML = currentQuestion.choice2;
    choiceThree.innerHTML = currentQuestion.choice3;
    correctAnswer.innerHTML = currentQuestion.correct;
};


// When start button is clicked, the first question appears on the screen and timer starts
startButton.addEventListener("click", startQuiz);

// When an answer is selected, time either stays same or decreases, user notified if right/wrong, and next question appears


//When timer is equal to zero, quiz stops and high score will be equal to the time left


//High score page pops up with text box and input is saved to local storage