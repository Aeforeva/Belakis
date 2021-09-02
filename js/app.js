const wasd = document.querySelector("#wasd");
const winHtml = document.querySelector("#winCount");
const lossHtml = document.querySelector("#lossCount");

let currentCheck = 0;
let winCount = 0;
let lossCount = 0;
let isRunning = false;

function start() {
  clearTimeout(timeOut);
  randomKeys = [];
  currentCheck = 0;
  wasd.innerHTML = "";
  createRandomKeys();
  setKeysField();
  animationStart(timer);
  timerEnd(timer);
  isRunning = true;
}

function win() {
  isRunning = false;
  winCount++;
  winHtml.innerHTML = `Win: ${winCount}`;
  animationStop();
}

function loss() {
  isRunning = false;
  lossCount++;
  lossHtml.innerHTML = `Loss: ${lossCount}`;
  document.querySelector(`#key${currentCheck}`).classList.add("false");
  animationStop();
}

function check(params) {
  if (isRunning && params === randomKeys[currentCheck]) {
    document.querySelector(`#key${currentCheck}`).classList.add("true");
    currentCheck++;
    if (currentCheck === 8) {
      win();
    }
  } else if (isRunning) {
    loss();
  }
}
