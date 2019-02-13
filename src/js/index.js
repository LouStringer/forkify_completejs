// Controller file
import Search from './models/Search';
import { domElements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';

// track global state (current search, selected recipe etc)
const state = {};

// Search for recipes
const controlSearch = async () => {
  const query = searchView.getSearchQuery();
  if (query) {
    state.search = new Search(query);
    renderLoader(domElements.results);
    searchView.clearSearchInput();
    searchView.clearRecipeList();
    await state.search.getResults();
    clearLoader();
    searchView.showRecipes(state.search.recipes);
  }
};

domElements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
