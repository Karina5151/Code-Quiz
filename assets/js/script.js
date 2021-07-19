var timer;
var secondsLeft = 30;
var timeLeft = document.querySelector("#timeLeft");

var startScreen = document.querySelector("#start-screen");
var startButton = document.getElementById("start-button");

var questionIdx = 0;
var showQuestion = document.querySelector("#show-question");
var questionTitle = document.querySelector("#questionTitle");
var choices = document.querySelector("#choices");
var answerCheck = document.querySelector("#answerCheck");

var endGameSection = document.querySelector("#endGameSection");
var endGameHeader = document.querySelector("#endGameHeader");
var finalScore = document.querySelector("#finalScore");
var inputInitials = document.querySelector("#initials");
var initialsSubmitBtn = document.querySelector("#initialsSubmitBtn");

var highScoresSection = document.querySelector("#highScoresSection");
var scores = document.querySelector("#scores");
var lastPageBtns = document.querySelector("#lastPageBtns");
var inputValidation = document.querySelector("#inputValidation");

var highscoresPage = document.querySelector("#highscoresPage");


// HighScores Page Display
function HSPage() {
    displayPastScores();
    var goBackBtn = document.createElement("button");
    goBackBtn.textContent = "Go Back";
    goBackBtn.className = "littleBtns";
    lastPageBtns.appendChild(goBackBtn);
    goBackBtn.addEventListener("click", restartGame);

    var clearHighScoresBtn = document.createElement("button");
    clearHighScoresBtn.textContent = "Clear Highscores";
    clearHighScoresBtn.className = "littleBtns";
    lastPageBtns.appendChild(clearHighScoresBtn);
    clearHighScoresBtn.addEventListener("click", clearHighScores);
}

// Array for saving highscores to local storage
var highScoresArray = JSON.parse(localStorage.getItem("highScoreStorage")) || [];

// function for Highscores Page
function highScores(event) {
    event.preventDefault();
    endGameSection.style.display = "none";
    showQuestion.style.display = "none";
    startScreen.style.display = "none";
    highScoresSection.style.display = "block";
    lastPageBtns.innerHTML = '';
    inputValidation.innerHTML = '';

    var input = document.querySelector("#initials").value;

    if (input.trim() != "") {
        highScoresArray.push(input + ": " + secondsLeft);
        localStorage.setItem("highScoreStorage", JSON.stringify(highScoresArray));
        console.log(highScoresArray);
    } else {
        inputValidation.innerHTML = "You did not enter valid initals, your score was not saved."
    }
    var goBackBtn = document.createElement("button");
    goBackBtn.textContent = "Go Back";
    goBackBtn.className = "littleBtns";
    lastPageBtns.appendChild(goBackBtn);
    goBackBtn.addEventListener("click", restartGame);

    var clearHighScoresBtn = document.createElement("button");
    clearHighScoresBtn.textContent = "Clear Highscores";
    clearHighScoresBtn.className = "littleBtns";
    lastPageBtns.appendChild(clearHighScoresBtn);
    clearHighScoresBtn.addEventListener("click", clearHighScores);

    displayPastScores();
};

// Display Past Scores function
function displayPastScores() {
    scores.innerHTML = '';
    highScoresArray.forEach(score => {
        console.log(score);
        var pastHighScores = document.createElement("div");
        pastHighScores.id = "pastHighScores";
        pastHighScores.textContent = score;
        scores.appendChild(pastHighScores);
    });
}

// Clear highscores function
function clearHighScores() {
    highScoresArray = [];
    localStorage.setItem("highScoreStorage", JSON.stringify([]));
    displayPastScores();
    console.log(highScoresArray);
}

// function to restart game
function restartGame() {
    showQuestion.style.display = "none";
    endGameSection.style.display = "none";
    highScoresSection.style.display = "none";
    startScreen.style.display = "block";
    questionIdx = 0;
    secondsLeft = 30;
    timeLeft.innerHTML = secondsLeft
}


// function for End Game screen
function endGame() {
    inputInitials.innerHTML = '';
    showQuestion.style.display = "none";
    endGameSection.style.display = "block";
    finalScore.innerHTML = "Your final score was " + secondsLeft;
    // inputInitials.innerHTML = "Enter your initials:";
    // var inputField = document.createElement("input");
    // inputField.id = "initials";
    // inputInitials.appendChild(inputField);

    // var initialsSubmitBtn = document.createElement("button");
    // initialsSubmitBtn.textContent = "Submit";
    // initialsSubmitBtn.className = "littleBtns";
    // inputInitials.appendChild(initialsSubmitBtn);
    initialsSubmitBtn.addEventListener("click", highScores);

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


// function to Display Questions
function displayQuestions() {
    showQuestion.style.display = "block";
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
    startScreen.style.display = "none";
    displayQuestions();
    startTimer();
}


// Starting Display upon refresh
startScreen.style.display = "block";
endGameSection.style.display = "none";
showQuestion.style.display = "none";
highScoresSection.style.display = "none";

// Link to Highscores Page
highscoresPage.addEventListener("click", HSPage);

// event listener for Start Button
startButton.addEventListener("click", startGame);