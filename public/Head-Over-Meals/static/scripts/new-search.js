import {
  alphasort,
  kcalsort,
  timesort,
  selected,
} from "./modules/search-helper.js";

const alpha = document.getElementById("alphabet");
const cal = document.getElementById("calories");
const time = document.getElementById("time");
const arrow = document.getElementsByClassName("arrow");

const recipes = document.querySelectorAll(".recipe");

const titles = [];
for (let i = 0; i < recipes.length; i++) {
  titles[i] = recipes[i].getAttribute("title");
}
titles.sort();

//for each button,when clicked,will sort accordingly,and if arrow is set to descending already, reverse the elements.
alpha.onclick = () => {
  selected(0);
  states.type = "alpha";
  states.sorting();
};
cal.onclick = () => {
  selected(1);
  states.type = "kcal";
  states.sorting();
};

time.onclick = () => {
  selected(2);
  states.type = "time";
  states.sorting();
};
console.log(recipe);

let states = {
  type: "alpha",
  order: "",
  searchText: "",
  sorting: function () {
    // let orderedList = search(this.searchText);
    let orderedList = recipe;

    console.log(orderedList);

    if (orderedList.length == 0) {
      noResult.style.display = "initial";
    } else {
      noResult.style.display = "none";
    }
    if (this.type == "alpha") {
      alphasort(recipes, orderedList);
    }

    if (this.type == "kcal") {
      kcalsort(recipes, orderedList);
    }

    if (this.type == "time") {
      timesort(recipes, orderedList);
    }

    if (this.order == "arrow dsc") {
      // reverse();
    }
  },
};
// states.sorting();
// export { kcalsort };
