import { getRecipes } from "./modules/fetch-recipes.js";
import { gallery_fill, carousel_fill } from "./modules/new-logic.js";
import { search_controller } from "./modules/search-helper.js";
import { clicks, clearButton, modal_animations } from "./modules/clicks.js";

let page = async () => {
  let recipes = await getRecipes();
  gallery_fill(recipes);
  carousel_fill(recipes);

  const recipesNodelist = document.querySelectorAll(".recipe");
  const noResult = document.getElementById("no-result");
  const clear = document.getElementById("clear-search");

  let states = {
    type: "alpha",
    reverse: false,
    searchText: "",
    ids: [],
    sorting: () => {
      clearButton(states.searchText);

      states.ids = search_controller({
        value: states.searchText,
        type: states.type,
        reverse: states.reverse,
        nodeList: recipesNodelist,
        recipesList: recipes,
      });
    },
  };
  states.sorting();
  clicks(states);
  modal_animations();
};

function main() {
  page();
}

main();
