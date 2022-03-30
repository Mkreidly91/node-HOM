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

//takes in value,and returns a nodelist of elements that contain that value.
const search_results_nodeList = (value, nodeList) => {
  let searchResults = new Array();
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].title.toLowerCase().trim().includes(value)) {
      nodeList[i].style.display = "flex";
      searchResults.push(nodeList[i]);
    } else {
      nodeList[i].style.display = "none";
    }
  }
  return searchResults;
};

const new_search_results_List = (value, recipeList) => {
  let searchResults = new Array();
  for (let i = 0; i < recipeList.length; i++) {
    if (recipeList[i].name.toLowerCase().trim().includes(value)) {
      searchResults.push(recipeList[i]);
    }
  }
  return searchResults;
};

//takes in a nodelist, and returns the corresponding list of objects.
const get_list = (nodeList, recipes) => {
  let newList = [];
  for (let i = 0; i < nodeList.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      if (nodeList[i].title == recipes[j].name) {
        newList.push(recipes[j]);
      }
    }
  }
  return newList;
};

//orders the html elements according to the sorting applied,returns an array of ordered ids.
const order = (nodeList, sortedArray, reverse) => {
  const sortedNodeList = [];
  reverse === true ? sortedArray.reverse() : sortedArray;
  for (let i = 0; i < nodeList.length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (nodeList[i].title == sortedArray[j].name) {
        nodeList[i].style.order = j + 1;
        sortedNodeList[j] = parseInt(nodeList[i].id);
      }
    }
  }
  return sortedNodeList;
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

// value, type, reverse, nodeList, recipesList
const search_controller = (options) => {
  const { value, type, reverse, nodeList, recipesList } = options;

  const resultsNodeList = search_results_nodeList(value, nodeList);
  const resultsList = get_list(resultsNodeList, recipesList);

  const noResult = document.getElementById("no-result");

  if (resultsNodeList.length == 0) {
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

  return order(resultsNodeList, resultsList, reverse);
};

const new_search_controller = (options) => {
  const { value, recipeList, type, reverse } = options;
  const resultsList = new_search_results_List(value, recipeList);

  const noResult = document.getElementById("no-result");

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
    resultsList.reverse;
  }

  return resultsList;
};
export { new_search_controller };
