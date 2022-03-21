require("dotenv").config();

const connectDB = require("./db/connect");
const recipe = require("./models/recipe");
const jsonRecipes = require("./recipes.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await recipe.deleteMany();
    await recipe.create(jsonRecipes);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
