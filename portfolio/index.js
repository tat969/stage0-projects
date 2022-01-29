// смена изображений
const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelectorAll('.portfolio-btns');

console.log(portfolioImages);


function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    const season = event.target.dataset.season;
    console.log(season);
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
}

portfolioBtns.forEach(
  function (portfolioBtn) {
    portfolioBtn.addEventListener('click', (changeImage));
  }
);


  

//function preloadSummerImages() {
   // for(let i = 1; i <= 6; i++) {
     // const img = new Image();
     // img.src = `./assets/img/${seasons}/${i}.jpg`;
    //}
  //}
 // preloadSummerImages();