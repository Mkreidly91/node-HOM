const express = require("express");
const router = express.Router();

const {
  getAllRecipes,
  getRecipe,
  createRecipe,
  patchRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

router.route("/").get(getAllRecipes).post(createRecipe);
router.route("/:id").get(getRecipe).patch(patchRecipe).delete(deleteRecipe);

module.exports = router;
