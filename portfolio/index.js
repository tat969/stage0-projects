//burger-menu
(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header_nav');
  const menuCloseItem = document.querySelector('.header_nav_close ');
  burgerItem.addEventListener('click', () => {
      menu.classList.add('header_nav_active');
  })
  menuCloseItem.addEventListener('click', () => {
   menu.classList.remove('header_nav_active');
  })
}());

//slider
const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelectorAll('.portfolio-btns');
const seasons = ['winter', 'spring', 'summer', 'autumn']; 

function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    const season = event.target.dataset.season;
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
  }
}
portfolioBtns.forEach(
  function (portfolioBtn) {
    portfolioBtn.addEventListener('click', (changeImage));
  }
)

//image caching
/*function preloadSummerImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${seasons}/${i}.jpg`;
    }
  }
  preloadSummerImages();*/


//buttons-portfolio backlight
  //const portfolioBtn = document.querySelector('.portfolio-btn');
  
  //const portfolioBtns = document.querySelectorAll('.portfolio-btns');
 
  
  /*function changeClassActive(event) {
    if(event.target.classList.contains('portfolio-btn')) {
      
      portfolioBtn.forEach.remove('portfolio-btn_active');
    }
  }
  portfolioBtns.forEach(
    function (portfolioBtn) {
      portfolioBtn.addEventListener('click', (changeImage));
    }
  )*/

  function changeClassActive (event) {
    
  }
  
  
  portfolioBtns.forEach(
    function (portfolioBtn) {
      portfolioBtn.addEventListener('click', (changeClassActive));
    }
  )
  
  
    
  



