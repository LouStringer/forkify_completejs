export const domElements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  results: document.querySelector('.results'),
  resultsList: document.querySelector('.results__list'),
  resultsPages: document.querySelector('.results__pages'),
  recipe: document.querySelector('.recipe'),
};

export const domElementStrings = {
  loader: 'loader',
};

export const renderLoader = parent => {
  const loader = `
    <div class="${domElementStrings.loader}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${domElementStrings.loader}`);
  loader.parentElement.removeChild(loader);
}