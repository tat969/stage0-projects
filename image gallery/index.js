
/*function dayNigntMode(){
  const date = new Date();
  const hour = date.getHours();

  if(hour >= 7 && hour <= 18){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.body.header_title.color = 'black';
  }
  else{
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
}*/


const form = document.querySelector('form');
const search = document.querySelector('.search-txt');
const wrapper = document.querySelector('.img_wrapper');
const key = `FJb82V9a-Pwsw1TD71WiGcZuB6-O76x7l9-24Tg9JeA`;



search.addEventListener('keydown', function(event) {
  if(event.key === 'Enter')
   showData();
})


let urlAPI = `https://api.unsplash.com/search/photos?per_page=30&page=1&query=california&client_id=${key}`
let urlSearch = `https://api.unsplash.com/search/photos?client_id=${key}&per_page=30&page=1&query=`
getData(urlAPI);

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const newUrlApi = `${urlSearch}${search.value}`

  if (search.value) {
    getData(newUrlApi)
  }
})

async function getData(adress) {
  wrapper.innerHTML = ''

  const res = await fetch(adress)
  const data = await res.json()
  data.results.forEach((element) => {
    showData(element)
    console.log(element)
  })
  }
  
  function showData(data) {
    const card = create('card', 'card')
    const img = create('img', 'photo')
    img.src =`${data.urls.regular}`
    img.alt = `${data.alt_description}`

    card.appendChild(img)
    wrapper.appendChild(card)
  } 
  


  function create(element, cl) {
    const container = document.createElement(element)
    container.classList.add(cl)
    return container
  }

  