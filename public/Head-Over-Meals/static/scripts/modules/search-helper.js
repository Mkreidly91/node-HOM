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

const grab_ids = (nodelist, sortedarray) => {
  const sortedIds = [];
  const arr = [];
  for (let i = 0; i < nodelist.length; i++) {
    for (let j = 0; j < sortedarray.length; j++) {
      if (nodelist[i].title == sortedarray[j].name) {
        for (let i = 0; i < nodelist.length; i++) {
          nodelist[i].style.order = j + 1;
        }
        // sortedIds.push({
        //   name: nodelist[i].title,
        //   id: parseInt(nodelist[i].id),
        //   order: j + 1,
        // });
        arr[i] = j + 1;
      }
    }
  }
  console.log(arr);
  return arr;
};

//sorts the elements by alphabetical order
let alphasort = (nodelist, list) => {
  let sorted = list.sort((a, b) => {
    return compareString(a, b);
  });
  grab_ids(nodelist, sorted);
};

let kcalsort = (nodelist, list) => {
  let sorted = list.sort((a, b) => {
    if (a.kcal == b.kcal) {
      return compareString(a, b);
    }
    return a.kcal - b.kcal;
  });
  grab_ids(nodelist, sorted);
};

let timesort = (nodelist, list) => {
  let sorted = list.sort(function (a, b) {
    if (a.time == b.time) {
      return compareString(a, b);
    }
    return a.time - b.time;
  });
  grab_ids(nodelist, sorted);
};

let reverse = () => {
  //   orderedList.reverse();
  //   recipesSorted.reverse();
  //   nodelistsort(recipes, orderedList);
};

let displayed_elements = (nodelist) => {
  let searchResults = new Array();

  let x = 0;
  for (let i = 0; i < nodelist.length; i++) {
    if (nodelist[i].style.display == "flex") {
      searchResults.push(nodelist[i]);
      searchResults[x].style.order = x + 1;
      x++;
    }
  }

  return searchResults;
};

//controls the sorting buttons,by adding and removing a "selected" class.
let sortListItem = document.getElementsByClassName("sort-list-item");
let selected = (x) => {
  sortListItem[x].classList.add("selected");
  for (let i = 0; i < sortListItem.length; i++) {
    if (i != x) {
      sortListItem[i].classList.remove("selected");
    }
  }
};

export { alphasort, kcalsort, timesort, selected };
