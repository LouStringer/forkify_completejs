// Global app controller
import axios from 'axios';

// for api requests
const key = '9dd30cb993b9f387907370655c4d6efe';
const proxy = 'https://still-reef-35122.herokuapp.com/';
const searchUrl = 'https://www.food2fork.com/api/search';
const requestUrl = 'https://www.food2fork.com/api/get';

const getResults = async (query) => {
  const result = await axios(`${proxy}${searchUrl}?${key}&q=${query}`);
  console.log(result);
};

getResults('vegan');
