const Recipe = require("../models/recipe");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find({}).sort("name");
  res.status(StatusCodes.OK).json({ recipes, count: recipes.length });
  // res.status(200).send("get all recipes");
};

//get a single recipe
const getRecipe = async (req, res) => {
  const {
    params: { id: recipeId },
  } = req;
  const recipe = await Recipe.findOne({ _id: recipeId });
  if (!recipe) {
    throw new NotFoundError(`No recipe with id ${recipeId}`);
  }
  res.status(StatusCodes.OK).json({ recipe });
};

//create a recipe
const createRecipe = async (req, res) => {
  const newRecipe = await Recipe.create(req.body);
  res.status(StatusCodes.CREATED).json({ newRecipe });
};

//update/patch recipe
const patchRecipe = async (req, res) => {
  const {
    body: { name, kcal, time, servings, servingType },
    params: { id: recipeId },
  } = req;
  // if (!name & !kcal & !time & !servings & !servingType) {
  //   throw new BadRequestError();
  // }
  const possibleKeys = ["name", "kcal", "time", "servings", "servingType"];
  const keys = Object.keys(req.body);
  console.log(keys[0]);

  for (key in keys) {
    if (!possibleKeys.includes(keys[key])) {
      throw new BadRequestError(`${keys[key]} is not a possible key`);
    }
  }

  const recipe = await Recipe.findOneAndUpdate({ _id: recipeId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!recipe) {
    throw new NotFoundError(`no recipe with id ${recipeId}`);
  }
  res.status(StatusCodes.OK).json({ recipe });
};

//delete recipe
const deleteRecipe = async (req, res) => {
  const {
    params: { id: recipeId },
  } = req;
  const recipe = await Recipe.findOneAndRemove({
    _id: recipeId,
  });
  if (!recipe) {
    throw new NotFoundError(`no recipe with id ${recipeId}`);
  }
  res.status(StatusCodes.OK).json({ recipe });
};

module.exports = {
  getAllRecipes,
  getRecipe,
  createRecipe,
  patchRecipe,
  deleteRecipe,
};
