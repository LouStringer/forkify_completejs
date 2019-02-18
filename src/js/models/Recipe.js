import axios from 'axios';
import { apiStrings } from './baseModels';

export default class Recipe {
    constructor(id) {
      this.id = id;
    };

    async getRecipe() {
      try {
        const result = await axios (`${apiStrings.proxy}${apiStrings.requestUrl}?key=${apiStrings.key}&rId=${this.id}`);
        this.selectedRecipe = result.data.recipe;
      } catch(error) {
        console.log(error);
      };
    };
};