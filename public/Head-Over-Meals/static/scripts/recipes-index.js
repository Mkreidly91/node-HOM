import { getRecipes } from "./modules/fetch-recipes.js";
import { refreshDom } from "./modules/new-logic.js";
import { new_search_controller } from "./modules/search-helper.js";
import { clicks, clearButton, modal_animations } from "./modules/clicks.js";

let page = async () => {
  let recipes = await getRecipes();
  refreshDom(recipes);

  // const recipesNodelist = document.querySelectorAll(".recipe");
  const noResult = document.getElementById("no-result");
  const clear = document.getElementById("clear-search");

  let states = {
    type: "alpha",
    reverse: false,
    searchText: "",
    results: [],
    sorting: () => {
      clearButton(states.searchText);

      const results = new_search_controller({
        value: states.searchText,
        recipeList: recipes,
        type: states.type,
        reverse: states.reverse,
      });
      if (states.results !== results) {
        refreshDom(results);
      }
      states.results = results;
      clicks(states);
    },
  };
  states.sorting();

  modal_animations();
};

function main() {
  page();
}

main();
