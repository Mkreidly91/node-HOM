//compares two strings and returns a value.
let compareString = (a, b) => {
  let la = a.name.toLowerCase(),
    lb = b.name.toLowerCase();

  if (la < lb) {
    return -1;
  }
  if (la > lb) {
    return 1;
  }
  return 0;
};

//takes in (search text,recipe list), and returns a new list of items that include the value of search text
const search_results_List = (value, recipeList) => {
  const searchResults = new Array();
  for (let i = 0; i < recipeList.length; i++) {
    if (recipeList[i].name.toLowerCase().trim().includes(value)) {
      searchResults.push(recipeList[i]);
    }
  }
  return searchResults;
};

//sorts the elements by alphabetical order
let alphasort = (list) => {
  let sorted = list.sort((a, b) => {
    return compareString(a, b);
  });
};

//sorts the elements by kcal
let kcalsort = (list) => {
  let sorted = list.sort((a, b) => {
    if (a.kcal == b.kcal) {
      return compareString(a, b);
    }
    return a.kcal - b.kcal;
  });
};

//sorts the elements by time
let timesort = (list) => {
  let sorted = list.sort(function (a, b) {
    if (a.time == b.time) {
      return compareString(a, b);
    }
    return a.time - b.time;
  });
};

const noResult = document.getElementById("no-result");
//modifies the results of the search depending on states object properties,and returns the results as a list
const search_controller = (options) => {
  const { value, recipeList, type, reverse } = options;
  const resultsList = search_results_List(value, recipeList);

  if (resultsList.length == 0) {
    noResult.style.display = "initial";
  } else {
    noResult.style.display = "none";
  }

  if (type == "alpha") {
    alphasort(resultsList);
  }

  if (type == "kcal") {
    kcalsort(resultsList);
  }

  if (type == "time") {
    timesort(resultsList);
  }
  if (reverse) {
    resultsList.reverse();
  }

  return resultsList;
};
export { search_controller };
