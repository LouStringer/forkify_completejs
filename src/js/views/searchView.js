import { domElements } from './base';

export const getSearchQuery = () => domElements.searchInput.value;

const prepRecipeHTML = (recipe) => {
  const recipeHTML = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `;
  domElements.resultsList.insertAdjacentHTML('beforeend', recipeHTML);
}

export const showRecipes = (recipes) => {
  recipes.forEach(prepRecipeHTML);
}