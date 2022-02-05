//смена изображений при клике
const audioBtn = document.querySelector('.nav-item');
const audioImages = document.querySelectorAll('.audio_image');
const audioBtns = document.querySelectorAll('.nav-items');

function changeImage(event) {
  if(event.target.classList.contains('nav-item')) {
    const image = event.target.dataset.image;
    audioImages.forEach((img) => img.src = `./assets/img/${image}.jpg`);
  }
}
audioBtns.forEach(
  function (audioBtn) {
    audioBtn.addEventListener('click', (changeImage));
  }
)
//аудиоплеер
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
//const pauseBtn = document.querySelector('.pause-btn');
let isPlay = false;

function playAudio() {
  if(!isPlay) {
    audio.currentTime = 0;
   audio.play();
   isPlay = true;

  } else {
      audio.pause();
      isPlay = false;
  }
  
}

playBtn.addEventListener('click', playAudio);



function toggleBtn() {
  playBtn.classList.toggle('pause');
}

playBtn.addEventListener('click', toggleBtn);

//pauseBtn.addEventListener('click', pauseAudio);
/*function playAudio() {
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}
function pauseAudio() {
  audio.pause();
  isPlay = false;
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);*/


/* playAudio() {
   if(!isPlay) {
     playAudio();
   } else {
     pauseAudio();
   }
}*/