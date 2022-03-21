import { gallery_fill } from "./image-gallery-functions.js";
// fetch recipes from API and fill up the page with content.
const getRecipes = async () => {
  return await fetch("http://localhost:3000/api/v1/recipes")
    .then((response) => response.json())
    .then((data) => {
      const recipes = data.recipes;
      return recipes;
    });
};

export { getRecipes };
