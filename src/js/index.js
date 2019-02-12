// Controller file
import Search from './models/Search';
import { domElements } from './views/base';
import * from './views/searchViews';

// track global state (current search, selected recipe etc)
const state = {};

// Search for recipes
const controlSearch = async () => {
  const query = 'vegan pasta'; // get from search view
  if (query) {
    state.search = new Search(query);
    // add UI waiting signal
    await state.search.getResults();
    console.log(state.search.recipes); // send to search view
  }
}

domElements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
