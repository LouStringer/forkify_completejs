// Controller file
import Search from './models/Search';

// track global state (current search, selected recipe etc)
const state = {};

// Search for recipes
const controlSearch = async () => {
  const query = 'vegan pasta';
  if (query) {
    state.search = new Search(query);
    await state.search.getResults();
    console.log(state.search.recipes);
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
