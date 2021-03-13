'use strict';

const display = document.querySelector('#display');

let intervalId = 0,
    minutes = 0,
    seconds = 0,
    displayArr = display.innerText.split(':');

function startBtnHandler() {
  const startBtn = document.querySelector('.start-btn');

  startBtn.addEventListener('click', () =>{
    intervalId = setInterval(() => {
      if (!parseInt(displayArr[1])) {
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        display.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      } else {
        seconds = parseInt(displayArr[1]);
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        display.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      }
    }, 1000)
})
}

function stopBtnHandler() {
  const stopBtn = document.querySelector('.stop-btn');
  stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
  })
  minutes = parseInt(displayArr[0]);
  seconds = parseInt(displayArr[1]);
}

function resetBtnHandler() {
  const resetBtn = document.querySelector('.reset-btn'),
        display = document.querySelector('#display');
  resetBtn.addEventListener('click', () => {
    display.innerText = `00:00`;
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
  })
}

function init() {
  startBtnHandler();
  stopBtnHandler();
  resetBtnHandler();
}

init();
