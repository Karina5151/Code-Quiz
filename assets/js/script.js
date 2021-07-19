
var questionIdx = 0
var startButton = document.getElementById("start-button");
var timer;
var secondsLeft = 30
var showQuestion = document.querySelector("#show-question");
var questionTitle = document.querySelector("#questionTitle");
var choices = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var answerCheck = document.querySelector("#answerCheck");
var timeLeft = document.querySelector("#timeLeft");
var inputInitials = document.querySelector("#inputInitials");



// Array for saving highscores to local storage
var highScoresArray = []



// function for Highscores Page
function highScores(saveNewScore) {
    saveNewScore.preventDefault();
    if (saveScore = inputField.value) {
        highScoresArray.push(saveNewScore)
        localStorage.setItem("highScoreStorage", JSON.stringify(highScoresArray));
        console.log(highScoresArray);
    }
    
    // questionTitle.textContent = "Highscores";
    // choices.forEach(function(highScores(saveScore) {
    //     console.log(highScoresArray)
    // }));
}

// function for End Game screen
function endGame() {
    questionTitle.textContent = "End of Game";
    choices.innerHTML = "Your final score was " + secondsLeft;
    inputInitials.innerHTML = "Enter your initials:";
    var inputField = document.createElement("input");
    inputField.id = "initials";
    inputInitials.appendChild(inputField);
    let saveScore = '';
    saveScore = inputField.value; 
    var initialsSubmitBtn = document.createElement("button");
    initialsSubmitBtn.textContent = "Submit";
    initialsSubmitBtn.id = "initSubBtn";
    inputInitials.appendChild(initialsSubmitBtn);
    initialsSubmitBtn.addEventListener("click", highScores(saveNewScore));
    
}


// Quiz Questions: an Array of Objects
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript to connect it to the HTML?",
        answerChoices: ["<script>", "<js>", "<link>", "<javascript>"],
        correctAnswer: 0
    },
    {
        question: "Where is the correct place to insert a JavaScript in the HTML?",
        answerChoices: ["The <body> section", "The <head> section", "The <html> section", "After the <!DOCTYPE html>"],
        correctAnswer: 0
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answerChoices: ["msg('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
        correctAnswer: 3
    },
    {
        question: "Who invented JavaScript?",
        answerChoices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Gary Almes"],
        correctAnswer: 2
    }
]

// function to check if answer was right or wrong
function isAnswerCorrect(event) {
    console.log(event.target.id);
    if (questions[questionIdx].correctAnswer === +event.target.id) {
        answerCheck.textContent = "Correct!";

    } else {
        answerCheck.textContent = "Incorrect. Answer was: " + questions[questionIdx].answerChoices[questions[questionIdx].correctAnswer];
        secondsLeft = secondsLeft - 3;
    }
    if (questionIdx < questions.length) {
        var pauseseconds = 1;
        var pause = setInterval(function () {
            pauseseconds--
            if (pauseseconds === 0) {
                questionIdx++;
                displayQuestions();
                clearInterval(pause)
            }
        }, 1000)

    }

}

// function answerIsWrong() {
//     questionIdx++;
//     displayQuestions();
// }


// function to Display Questions
function displayQuestions() {
    choices.innerHTML = '';
    answerCheck.textContent = '';
    var currentQuestion = (questions[questionIdx]);
    questionTitle.textContent = currentQuestion.question;

    currentQuestion.answerChoices.forEach((element, index) => {
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


// function to Start Timer
function startTimer() {
    timer = setInterval(function () {
        secondsLeft--
        timeLeft.innerHTML = secondsLeft
        if (secondsLeft === 0) {
            clearInterval(timer);
            endGame();
        }
        if (questionIdx === questions.length) {
            clearInterval(timer);
            endGame();
        }

    }, 1000)
}


// Function to display questions & start timer
function startGame() {
    displayQuestions();
    startTimer();
}

// event listener for Start Button
startButton.addEventListener("click", startGame);

