const API_URL = 'https://swapi.co/api/starships/';
const data = getRandomShips();
async function getRandomShips  () {
const response = await fetch (API_URL);
const json =  await response.json();
console.log(json.results);
}








