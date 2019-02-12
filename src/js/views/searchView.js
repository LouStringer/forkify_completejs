import { domElements } from './base';

export const getSearchQuery = () => domElements.searchInput.value;

export const showRecipes = (recipes) => {
  const recipeList = recipes.map((item) => {
    return `<li>
      <a class="results__link results__link--active" href="#${item.recipe_id}">
        <figure class="results__fig">
          <img src="${item.image_url}" alt="the cooked dish for this recipe">
        </figure>
        <div class="results__data">
          <h4 class="results__name">${item.title}</h4>
          <p class="results__author">${item.publisher}</p>
        </div>
      </a>
    </li>`;
  });
  domElements.resultsList.innerHTML = recipeList.join();
}