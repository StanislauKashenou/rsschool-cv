const playBtn = document.querySelector(".button");
const pauseBtn = document.querySelector(".pause-btn");
const audio = new Audio();
let isPlay = false;
const playNum = 0;

function playAudio() {
  audio.src = "https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3";
  audio.currentTime = 0;
  if (!isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}

playBtn.addEventListener("click", playAudio);

function toggleBtn() {
  if (!isPlay) {
    playBtn.classList.add("pause");
  } else {
    playBtn.classList.remove("pause");
  }
}
playBtn.addEventListener("click", toggleBtn);

function playNext() {}

function playPrev() {}
