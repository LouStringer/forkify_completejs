// Controller file
import Search from './models/Search';
import Recipe from './models/Recipe';
import { domElements, renderLoader, clearLoader } from './views/baseViews';
import * as searchView from './views/searchView';

// track global state (current search, selected recipe etc)
const state = {};

// Search for recipes matching query
const controlSearch = async () => {
  const query = searchView.getSearchQuery();
  if (query) {
    state.search = new Search(query);
    renderLoader(domElements.results);
    searchView.clearSearchInput();
    searchView.clearRecipeList();
    await state.search.getResults();
    clearLoader();
    searchView.showRecipes(state.search.recipeList);
  }
};

domElements.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  controlSearch();
});

domElements.resultsPages.addEventListener('click', event => {
  const button = event.target.closest('.btn-inline');
  searchView.showRecipes(state.search.recipeList, parseInt(button.dataset.goto));
});

// Fetch & display one recipe
const controlRecipe = async () => {
  const RecipeId = '#47746';
  if (id) {
    state.recipe = new 
  }
}