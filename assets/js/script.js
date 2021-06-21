
var questionIdx = 0
var startButton = document.getElementById("start-button");
var timer;
var secondsLeft = 30
var isGameOver = false;
var showQuestion = document.querySelector("#show-question");
var questionTitle = document.querySelector("#questionTitle");
var choices = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var answerCheck = document.querySelector("#answerCheck");

var questions = [
    { question: "Inside which HTML element do we put the JavaScript to connect it to the HTML?", 
        answerChoices: ["<script>", "<js>", "<link>", "<javascript>"], 
        correctAnswer: 0} ,
    { question: "Where is the correct place to insert a JavaScript in the HTML?", 
        answerChoices: ["The <body> section", "The <head> section", "The <html> section", "After the <!DOCTYPE html>"], 
        correctAnswer: 0} ,
    { question: "How do you write 'Hello World' in an alert box?", 
        answerChoices: ["msg('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"], 
        correctAnswer: 3} ,
    { question: "Who invented JavaScript?", 
        answerChoices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Gary Almes"] , 
        correctAnswer: 2}
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
    currentQuestion.answerChoices.forEach((element, index) => {
        console.log(index);
        var currentAnswers = document.createElement("button");
        currentAnswers.id = index;
        currentAnswers.textContent = element;
        choices.appendChild(currentAnswers);
        currentAnswers.style.display = "block";
        currentAnswers.style.margin = "10px";
        startScreen.style.display = "none";
        currentAnswers.addEventListener("click", isAnswerCorrect);   
       
    });
} 



function isAnswerCorrect(event) { 
    console.log(event.target.id);
    if (questions[questionIdx].correctAnswer === +event.target.id) {
        answerCheck.textContent = "Correct!";
        
    } else {
        answerCheck.textContent = "Incorrect. Answer was: " + questions[questionIdx].answerChoices[questions[questionIdx].correctAnswer];
    }
    
    if (questionIdx < questions.length) {
            var pauseseconds = 2;
            var pause = setInterval(function() {
                pauseseconds--
                if (pauseseconds === 0) {
                    questionIdx++;
                    displayQuestions();
                    clearInterval(pause)
                }
            }, 1000)
      
    }

}


function answerIsWrong() {
    questionIdx++;
    displayQuestions();
}

startButton.addEventListener("click", displayQuestions);


// event listener for isAnswerCorrect
