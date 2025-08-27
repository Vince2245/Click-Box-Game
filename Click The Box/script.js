let score = 0;
let timeLeft = 10;
let timer;

let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");
let box = document.getElementById("box");
let gameArea = document.getElementById("game-area");

let startScreen = document.getElementById("start-screen");
let startBtn = document.getElementById("start-game");

let gameOverScreen = document.getElementById("game-over");
let finalScore = document.getElementById("final-score");
let playAgainBtn = document.getElementById("play-again");


function moveBox() {
    let x = Math.random() * (gameArea.clientWidth - box.clientWidth);
    let y = Math.random() * (gameArea.clientHeight - box.clientHeight);
    box.style.left = x + "px";
    box.style.top = y + "px";
}


box.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});


function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    box.style.display = "block";
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    moveBox();

    timer = setInterval(function() {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}


function endGame() {
    clearInterval(timer);
    box.style.display = "none";
    finalScore.textContent = score;
    gameOverScreen.style.display = "block";
}


startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", startGame);


startScreen.style.display = "block";
box.style.display = "none";
