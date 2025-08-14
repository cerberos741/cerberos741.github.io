let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guess = document.querySelector(".guess")

let guessCount = 1;
let resetButton;

function checkGuess () {
    const userGuess = Number(guess.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
    }

    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You win!";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!! GAME OVER !!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low."
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high."
        }
    }

    guessCount++;
    guess.value = "";
    guess.focus();
}

guessSubmit.addEventListener("click", checkGuess)

function setGameOver() {
    guess.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start a new game";
    document.body.insertBefore(resetButton, document.querySelector('.resultParas'));
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guess.disabled = false;
    guessSubmit.disabled = false;
    guess.value = "";
    guess.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
}