const playBtn = document.querySelector(".button");
const audio = new Audio();
let isPlay = false;
const sound = document.querySelector(".header");
let image = document.querySelector(".main");
const btn = document.querySelectorAll(".header-item");
const btns = document.querySelector(".header-list");

function playAudio() {
  audio.currentTime = 0;
  // audio.src = `./assets/audio/forest.mp3`;
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
  playBtn.classList.toggle("pause");
}
playBtn.addEventListener("click", toggleBtn);

function changeSound(event) {
  audio.src = `./assets/audio/forest.mp3`;
  if (event.target.classList.contains("header-item")) {
    audio.src = `./assets/audio/${event.target.dataset.head}.mp3`;
    image.style.backgroundImage = `url('./assets/img/${event.target.dataset.head}.jpg')`;
    btn.forEach((el) => el.classList.remove("active"));
    event.target.classList.toggle("active");
  }
}

sound.addEventListener("click", changeSound);
