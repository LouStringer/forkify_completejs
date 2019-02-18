import { domElements } from './baseViews';

export const getSearchQuery = () => domElements.searchInput.value;

export const clearSearchInput = () => {
  domElements.searchForm.reset();
};

export const clearRecipeList = () => {
  domElements.resultsList.innerHTML = '';
  domElements.resultsPages.innerHTML = '';
}

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
};

const renderPageButtons = (currentPage, totalRecipes, resultsPerPage) => {
  const numOfPages = Math.ceil(totalRecipes/resultsPerPage);
  const previousPage = `<button class="btn-inline results__btn--prev" data-goto="${currentPage - 1}">
      <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>`;
  const nextPage = `<button class="btn-inline results__btn--next" data-goto="${currentPage + 1}">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-right"></use>
      </svg>
    </button>`;
  if (currentPage === 1 && numOfPages > 1) {
    domElements.resultsPages.insertAdjacentHTML('beforeend', `${nextPage}`);
  } else if (currentPage === numOfPages && numOfPages > 1) {
    domElements.resultsPages.insertAdjacentHTML('beforeend', `${previousPage}`);
  } else if (currentPage > 1 && currentPage < numOfPages) {
    domElements.resultsPages.insertAdjacentHTML('beforeend', `${previousPage} ${nextPage}`);
  };
};

export const showRecipes = (recipes, currentPage = 1, resultsPerPage = 10) => {
  clearRecipeList();
  const recipeStart = (currentPage - 1)*resultsPerPage;
  const recipeEnd = currentPage*resultsPerPage;
  recipes.slice(recipeStart, recipeEnd).forEach(prepRecipeHTML);
  renderPageButtons(currentPage, recipes.length, resultsPerPage);
}