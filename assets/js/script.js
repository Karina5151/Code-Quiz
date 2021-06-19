
var questionIdx = 0
var startButton = document.getElementById("start-button");
var timer;
var secondsLeft = 30
var isGameOver = false;
var questionDisplay = document.querySelector(".question-display");

var questions = [
    { question: "Inside which HTML element do we put the JavaScript to connect it to the HTML?", 
        answerChoices: ["<script>", "<js>", "<link>", "<javascript>"], 
        correctAnswer: "<script>"} ,
    { question: "Where is the correct place to insert a JavaScript in the HTML?", 
        answerChoices: ["The <body> section", "The <head> section", "The <html> section", "After the <!DOCTYPE html>"], 
        correctAnswer: "The <body> section"} ,
    { question: "How do you write 'Hello World' in an alert box?", 
        answerChoices: ["msg('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"], 
        correctAnswer: "alert('Hello World');"} ,
    { question: "Who invented JavaScript?", 
        answerChoices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Gary Almes"] , 
        correctAnswer: "Brendan Eich"}
]


function startTimer() {
    timer = setInterval(function() {
        secondsLeft--
        if (isGameOver ) {

        }
    }, 1000)
}


function startGame() {
    console.log(startButton);
}
startGame()


function startTimer() {

}


var showQuestion = []

function displayQuestions() {
    console.log("click");
    console.log(questions[questionIdx].question);
    showQuestion.push(questions[questionIdx].question);
    console.log(showQuestion.join(""));
    questionDisplay.innerHTML = showQuestion.join("");
    // event listener for isAnswerCorrect
    // isAnswerCorrect();
    // if statement 
    // if questionIdx < questions.length
    // show question using innerText and append child
    // for loop to show answers
    // create an element for each answer and append the text to it
}

function isAnswerCorrect() {
    questionIdx++;
    displayQuestions();
    // if selection === answers 
}

function answerIsWrong() {
    questionIdx++;
    displayQuestions();
}

startButton.addEventListener("click", displayQuestions);
