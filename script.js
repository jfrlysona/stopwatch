const startButton = document.querySelector(".start-btn");
const stopButton = document.querySelector(".stop-btn");
const resetButton = document.querySelector(".reset-btn");
const timerElement = document.querySelector(".timer");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

let milliseconds=0;
let seconds=0;
let minutes=0;

let intervalId;
function startTimer() {
    intervalId = setInterval(updateTimer,1);
}
function updateTimer() {
    let timerString = "";

    if (minutes < 10) {
        timerString += `0${minutes}:`;
    } else {
        timerString += `${minutes}:`;
    }

    if (seconds < 10) {
        timerString += `0${seconds}:`;
    } else {
        timerString += `${seconds}:`;
    }

    if (milliseconds < 10) {
        timerString += `00${milliseconds}`;
    } else if (milliseconds < 100) {
        timerString += `0${milliseconds}`;
    } else {
        timerString += `${milliseconds}`;
    }

    timerElement.innerHTML = timerString;

    milliseconds++;

    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
}
function stopTimer(){
    clearInterval(intervalId);
};
function resetTimer() {
    milliseconds=0;
    seconds=0;
    minutes=0;
    timerElement.innerHTML=`00:00:000`;
    startButton.disabled = false;
};
