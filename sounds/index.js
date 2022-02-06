const playBtn = document.querySelector(".button");
const audio = new Audio();
audio.src = `./assets/audio/forest.mp3`;
let isPlay = false;
const header = document.querySelector(".header");
let image = document.querySelector(".main");

function toggleAudio() {
  if (!isPlay) {
    startAudio()
  } else {
    pauseAudio()
  }
}
function startAudio() {
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}
function pauseAudio() {
  audio.pause();
  isPlay = false;
}

playBtn.addEventListener("click", toggleAudio);

function toggleBtn() {
  isPlay ? playBtn.classList.add("pause") : playBtn.classList.remove("pause")
}
function toggleMenuItem(event) {
  document.querySelector(".header-item.active").classList.remove("active")
  event.target.classList.add("active");
}

playBtn.addEventListener("click", toggleBtn);

function setAudio(event) {
  audio.src = `./assets/audio/${event.target.dataset.head}.mp3`;
}
function setImage(event) {
  image.style.backgroundImage = `url('./assets/img/${event.target.dataset.head}.jpg')`;
}
function setTheme(event) {
  const isValidElement = event.target.classList.contains("header-item");
  if (isValidElement) {
    setAudio(event);
    setImage(event);
    startAudio();
    toggleBtn();
    toggleMenuItem(event);
  }
}


header.addEventListener("click", setTheme);
