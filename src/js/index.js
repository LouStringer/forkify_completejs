// Controller file
import Search from './models/Search';
import Recipe from './models/Recipe';
import { domElements, renderLoader, clearLoader } from './views/baseView';
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
    try {
      await state.search.getResults();
    } catch(error) {
      alert('error searching for recipes!'); //TODO add in UI instead of alert
    }
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
const controlRecipe = async (hash) => {
  const id = window.location.hash.slice(1);
  if (id) {
    state.recipe = new Recipe(id);
    renderLoader(domElements.recipe);
    try {
      await state.recipe.getRecipe();
      // console.log(state.recipe.selectedRecipe);
      state.recipe.parseIngredients();
      // console.log(state.recipe.selectedRecipe);
    } catch(error) { // don't think this will trigger, as there is a catch on getRecipe()
      // console.error(error); //TODO add in UI instead
      alert(error.stack)
    }
    clearLoader(domElements.recipe)
  };
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));