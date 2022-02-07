//смена изображений при клике
const audioBtn = document.querySelector('.nav-item');
const audioImages = document.querySelector('.audio_image');
const audioBtns = document.querySelectorAll('.nav-items');
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');

function changeImage(event) {
  if(event.target.classList.contains('nav-item')) {
    const image = event.target.dataset.item;
    audioImages.src = `./assets/img/${image}.jpg`;
    
  }
  
}
audioBtns.forEach(
  function (audioBtn) {
    audioBtn.addEventListener('click', (changeImage));
  }
)
//аудиоплеер

function changeAudio(event) {
  if(event.target.classList.contains('nav-item')) {
    const bird = event.target.dataset.sound;
    audio.src = `./assets/audio/${bird}.mp3`;
    audio.setAttribute("autoplay","true");
  }
}

audioBtns.forEach(
  function (audioBtn) {
    audioBtn.addEventListener('click', (changeAudio));
  }
)
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


//смена кнопок при клике
function toggleBtn() {
  playBtn.classList.toggle('pause');
}

playBtn.addEventListener('click', toggleBtn);

//класс active
function changeColor (event) {
  audioBtn.classList.toggle('active');
}


audioBtns.forEach(
  function (audioBtns) {
    audioBtns.addEventListener('click', changeColor);
  }
) 

