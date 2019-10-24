const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

(async function getCities(){
  const response = await fetch(endpoint);
  const data = await response.json();
  cities.push(...data);


})();

function findMatches(wordToMatch, cities){
  return cities.filter((city) => {
    const regex = new RegExp(wordToMatch, 'gi');
    const res = city.city.match(regex) || city.state.match(regex);
    return res;
  })
}
const search = document.querySelector('input');
const list = document.querySelector('ul');


const searchHandler = (e) => {
  const result = findMatches(e.target.value, cities);
  const res = result.map((it) => {
    return `<li>
    <span class="name">${it.city}, ${it.state}</span>
    <span class="population">${it.population}</span>
    </li>`
  });
  list.innerHTML = res.join('');
}


search.addEventListener('change', searchHandler);
search.addEventListener('keyup', searchHandler);


