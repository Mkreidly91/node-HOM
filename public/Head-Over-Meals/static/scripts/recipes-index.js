import { recipeArraysEqual } from "./modules/helper.js";
import { getRecipes } from "./modules/fetch-recipes.js";
import { refreshDom } from "./modules/recipes-DOM";
import { search_controller } from "./modules/search-helper.js";
import { clicks, clearButton, modal_animations } from "./modules/clicks.js";

let page = async () => {
  let recipes = await getRecipes();
  refreshDom(recipes);

  let states = {
    type: "alpha",
    reverse: false,
    searchText: "",
    results: [],
    sorting: () => {
      clearButton(states.searchText);

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
