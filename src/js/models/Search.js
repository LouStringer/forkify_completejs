import axios from 'axios';
import { apiStrings } from './baseModels';

export default class Search {
  constructor(query) {
    this.query = query;
  };

  async getResults() {
    try {
      const result = await axios (`${apiStrings.proxy}${apiStrings.searchUrl}?key=${apiStrings.key}&q=${this.query}`);
      this.recipeList = result.data.recipes;
    } catch(error) {
      console.error(error)
    };
  };
};