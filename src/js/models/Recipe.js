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
        // console.error(error);
        alert(error.stack)
      };
    };

    parseIngredients() {
      console.log(this.selectedRecipe.ingredients)
      const unwantedUnits = ['cups', 'teaspoons', 'teaspoon', 'tablespoons', 'tablespoon', 'ounces', 'ounce', 'pounds', 'pound', 'grammes', 'gramme', 'grams', 'gram', 'millilitres', 'millilitre', 'millileters', 'millileter', 'litres', 'litre', 'liters', 'liter', '1/2', '1 / 2', '1/4', '1 /4', '3/4', '3 / 4'];
      const standardUnits = ['cup', 'tsp', 'tsp', 'tbsp', 'tbsp', 'oz', 'oz', 'lb', 'lb', 'g', 'g', 'g', 'g', 'ml', 'ml', 'ml', 'ml','l', 'l', 'l', 'l', '0.5', '0.5', '0.25', '0.25', '0.75', '0.75'];
      const parsedIngredients = this.selectedRecipe.ingredients.map(item => {
        let ingredient = item.toLowerCase();
        unwantedUnits.forEach((unit, i) => {
          ingredient = ingredient.replace(unit, standardUnits[i]);
        });
        const regex = /\s\([^)]*\)/g
        ingredient = ingredient.replace(regex, '');
        return ingredient;
      });
      this.selectedRecipe.ingredients = parsedIngredients;
      console.log(this.selectedRecipe.ingredients)
    }
};