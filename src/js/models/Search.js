import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
    this.key = '9dd30cb993b9f387907370655c4d6efe';
    this.proxy = 'https://cors-anywhere.herokuapp.com/';
    this.searchUrl = 'https://www.food2fork.com/api/search';
    // this.requestUrl = 'https://www.food2fork.com/api/get'; 
  }

  async getResults(query) {
    try {
      const result = await axios (`${this.proxy}${this.searchUrl}?key=${this.key}&q=${this.query}`);
      this.recipes = result.data.recipes;
      console.log(this.recipes);
    } catch(error) {
      console.log(error)
    }
  }
}