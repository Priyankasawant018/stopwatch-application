let timer; // Timer variable
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const displayMinutes = document.getElementById('displayMinutes');
const displaySeconds = document.getElementById('displaySeconds');
const displayMilliseconds = document.getElementById('displayMilliseconds');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function startTimer() {
    timer = setInterval(updateTime, 10); // Update every 10 milliseconds
    startButton.disabled = true;
}

function stopTimer() {
    clearInterval(timer);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(timer);
    startButton.disabled = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayMinutes.textContent = '00';
    displaySeconds.textContent = '00';
    displayMilliseconds.textContent = '000';
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    displayMinutes.textContent = padTime(minutes);
    displaySeconds.textContent = padTime(seconds);
    displayMilliseconds.textContent = padMilliseconds(milliseconds);
}

function padTime(val) {
    return val > 9 ? val : "0" + val;
}

function padMilliseconds(val) {
    if (val < 10) {
        return "00" + val;
    } else if (val < 100) {
        return "0" + val;
    } else {
        return val;
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
