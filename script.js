var myQuiz = $("#quizContainer");
var secondsRemaining = questions.length * 15;
var timer;
var userAnswer;
var answer = questions[answer];
var currentIndex = 0;
var startQuiz = document.getElementById("startQuiz");

startQuiz.onclick = startTimer;

function startTimer() {
  displayQuestion();

  timer = setInterval(function() {
    secondsRemaining -= 1;
    console.log(secondsRemaining);

    var timerDisplay = document.getElementById("theTimer");
    timerDisplay.textContent = secondsRemaining;

    if (secondsRemaining === 0) {
      clearInterval(timer);
      alert("Time's Up");
    }
  }, 1000);
}

//display questions in the div

function displayQuestion() {
  document.getElementById("card-header").innerHTML = "";
  document.getElementById("card-body").innerHTML = "";

  var titleElement = document.createElement("h1");
  var currentQuestion = questions[currentIndex].title;
  titleElement.textContent = currentQuestion;

  var cardHeader = document.getElementById("card-header");
  cardHeader.appendChild(titleElement);

  var choices = questions[currentIndex].choices;

  for (var i = 0; i < choices.length; i++) {
    var choicesElement = document.createElement("button");
    var cardBody = document.getElementById("card-body");
    cardBody.appendChild(choicesElement);
    choicesElement.textContent = choices[i];
    choicesElement.onclick = isCorrectAnswer;
  }

  console.log(choices);
}

function isCorrectAnswer() {
  var answer = questions[currentIndex].answer;
  userAnswer = this.innerHTML;

  if (userAnswer === answer) {
    console.log("answer correct");
  } else {
    removeTime();
    console.log("answer incorrect");
  }
  currentIndex++;
  if (currentIndex === questions.length) {
    console.log(getScore());
    window.location.href = "highscore.html";
  }
  displayQuestion();
  console.log("finish isCorrectAnswer");
}

function addTime() {
  secondsRemaining += 15;
}

function removeTime() {
  secondsRemaining -= 15;
}

function getScore() {
  return secondsRemaining;
}

localStorage.setItem("Score", getScore());

function getUserInfo() {}

function saveScore() {}

console.log(questions);

//----------------------------------------------------------------------------
