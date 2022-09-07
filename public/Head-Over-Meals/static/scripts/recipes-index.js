import { recipeArraysEqual } from "./modules/helper.js";
import { getRecipes } from "./modules/fetch-recipes.js";
import { refreshDom } from "./modules/recipes-DOM.js";
import { search_controller } from "./modules/search-helper.js";
import {
  clicks,
  clearSearchButton,
  modal_animations,
} from "./modules/clicks.js";

let page = async () => {
  let recipes = await getRecipes();
  refreshDom(recipes);

  //states object defines the state of my image gallery
  //the object properties represent sorting functions which will trigger through search_controller
  //
  let states = {
    type: "alpha",
    reverse: false,
    searchText: "",
    results: [],
    sorting: () => {
      clearSearchButton(states.searchText);

      const results = search_controller({
        value: states.searchText,
        recipeList: recipes,
        type: states.type,
        reverse: states.reverse,
      });
      const resultsNames = [];
      results.forEach((element) => {
        resultsNames.push(element.name);
      });

      if (!recipeArraysEqual(resultsNames, states.results)) {
        refreshDom(results);
      }
      states.results = results;
    },
  };
  clicks(states);
  states.sorting();
  modal_animations();
};

function main() {
  page();
}

main();
