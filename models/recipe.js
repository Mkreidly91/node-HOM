const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide recipe name"],
    maxlength: 50,
  },
  kcal: {
    type: Number,
    required: [true, "please provide calorie count"],
  },
  time: {
    type: Number,
    required: [true, "please provide time"],
  },
  servings: {
    type: String,
    required: [true, "please provide number of servings"],
  },
  servingType: {
    type: String,
    required: [true, "please provide serving type"],
    defualt: "serving(s)",
  },
  src: {
    type: [String],
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
