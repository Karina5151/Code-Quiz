
var questionIdx = 0
var startButton = document.getElementById("start-button");
var timer;
var secondsLeft = 30
var isGameOver = false;
var showQuestion = document.querySelector("#show-question");
var questionTitle = document.querySelector("#questionTitle");
var choices = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");


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



function displayQuestions() {
    console.log("click");
    console.log(questions[questionIdx].question);
    console.log(questionTitle);
    var currentQuestion = (questions[questionIdx]);
    questionTitle.textContent = currentQuestion.question;
    currentQuestion.answerChoices.forEach(element => {
        console.log(element);
        var currentAnswers = document.createElement("button");
        console.log(currentAnswers);
        currentAnswers.textContent = element;
        choices.appendChild(currentAnswers);
        currentAnswers.style.display = "block";
        currentAnswers.style.margin = "10px";
        startScreen.style.display = "none";

       
    } );
     



  
    // isAnswerCorrect();
    // if statement 
    // if questionIdx < questions.length
  
}

function isAnswerCorrect() {
    

    if (answerChoices.value === 0) {
        infobox.innerHTML = "Correct!";
    } else {
        infoBox.innerHTML = ("Incorrect. Answer was: + "questions[questionIdx].correctAnswer" ");
    }
    
    if (questionIdx < questions.length) {
    questionIdx++;
    displayQuestions();
    }

}


function answerIsWrong() {
    questionIdx++;
    displayQuestions();
}

startButton.addEventListener("click", displayQuestions);

currentAnswers.addEventListener("click", isAnswerCorrect);   // event listener for isAnswerCorrect
