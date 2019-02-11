// Global app controller
import axios from 'axios';

// for api requests to food2fork
const info = {
  key: '9dd30cb993b9f387907370655c4d6efe',
  proxy: 'https://cors-anywhere.herokuapp.com/',
  originUrl: 'https://www.food2fork.com',
  searchUrl: 'https://www.food2fork.com/api/search',
  requestUrl: 'https://www.food2fork.com/api/get',
};

const getResults = async (query) => {
  const result = await axios (`${info.proxy}${info.searchUrl}?key=${info.key}&q=${query}`);
  const recipes = result.data.recipes;
  console.log(recipes);
};

getResults('vegan');
