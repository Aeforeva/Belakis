const timeBarParent = document.querySelector("#timeBarParent");
const timeBar = document.querySelector(".timeBar");
let timer = 3.3;
let timeOut;

function setTimer(params) {
  timer = params;
  console.log("The timer is set to " + timer);
}

function timerEnd(params) {
  timeOut = setTimeout(loss, params * 1000);
}

function animationStart(params) {
  timeBarParent.removeChild(timeBar);
  timeBarParent.appendChild(timeBar);
  timeBar.style.animation = `roundtime ${params}s linear forwards`;
}

function animationStop() {
  timeBar.style.animationPlayState = "paused";
  clearTimeout(timeOut);
}
