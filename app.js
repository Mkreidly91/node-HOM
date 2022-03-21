require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

app.use(express.static("./public/Head-Over-Meals"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect db
const connectDB = require("./db/connect");

//view engine
app.set("views", "./public/Head-Over-Meals/templates");
app.set("view engine", "pug");

//routers
const mainRouter = require("./routes/ mainRouter");
const recipeRouter = require("./routes/recipeRouter");

//importing middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//routes
app.use("/", mainRouter);
app.use("/api/v1/recipes", recipeRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
