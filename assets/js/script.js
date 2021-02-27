const questions = [
    {
        question: "Which is NOT a primitive type?",
        answers: [
            {text: "Number", correct: false},
            {text: "Float", correct: true},
            {text: "String", correct: false},
            {text: "Object", correct: false}
        ]
    }]

// When page loads, have initial question box

// When click start button, timer starts and new question box

let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function() {
    console.log("hi");
});

// let questionBox = {
//     question: "",
//     choice1: "",
//     choice2: "",
//     choice3: "",
//     choice4: "",
//     correctAnswer: ""
// };