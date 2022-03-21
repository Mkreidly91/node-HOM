$(document).ready(function () {
  const alpha = document.getElementById("alphabet");
  const cal = document.getElementById("calories");
  const time = document.getElementById("time");
  const arrow = document.getElementsByClassName("arrow");
  const recipes = document.querySelectorAll(".recipe");
  var titles = new Array();

  for (let i = 0; i < recipes.length; i++) {
    titles[i] = recipes[i].getAttribute("title");
  }
  titles.sort();

  var recipesSorted = new Array();

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

  //sorts the recipes node-list according to order,and stores it in recipesSorted array,
  //orders the position of  nodelist elements using flexbox order.
  //to be used in later sorting functions.
  //this orders the elements visually without changing anything in html markup.
  let nodelistsort = (nodelist, sortedarray) => {
    recipesSorted = [];
    for (let i = 0; i < nodelist.length; i++) {
      recipesSorted.push(nodelist[i]);
    }
    for (let i = 0; i < recipesSorted.length; i++) {
      for (let j = 0; j < sortedarray.length; j++) {
        if (recipesSorted[i].title == sortedarray[j].name) {
          recipesSorted[i].style.order = j + 1;
        }
      }
    }
  };
  //returns all of the elements with display="flex", as in all the displayed elements.
  let displayed = (nodelist) => {
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

  //sorts the elements by alphabetical order
  let alphasort = (list) => {
    let sorted = list.sort((a, b) => {
      return compareString(a, b);
    });

    nodelistsort(recipes, sorted);
  };
  //we call the function since alphabet is defualt.
  alphasort(orderedList);

  //sort by calories,if calories are equal,sort by alphabet after that.
  let kcalsort = (list) => {
    let sorted = list.sort((a, b) => {
      if (a.kcal == b.kcal) {
        return compareString(a, b);
      }
      return a.kcal - b.kcal;
    });
    nodelistsort(recipes, sorted);
  };

  //sort by time,if time is equal,sort by alphabet after that.
  let timesort = (list) => {
    let sorted = list.sort(function (a, b) {
      if (a.time == b.time) {
        return compareString(a, b);
      }

      return a.time - b.time;
    });
    nodelistsort(recipes, sorted);
  };

  //This section is responsible for the sorting buttons.

  //Reverses the order of elements when required.
  let reverse = () => {
    orderedList.reverse();
    recipesSorted.reverse();
    nodelistsort(recipes, orderedList);
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
  selected(0);

  //for each button,when clicked,will sort accordingly,and if arrow is set to descending already, reverse the elements.
  alpha.onclick = () => {
    states.type = "alpha";
    states.sorting();
  };
  cal.onclick = () => {
    states.type = "kcal";
    states.sorting();
  };

  time.onclick = () => {
    states.type = "time";
    states.sorting();
  };

  //change the width of rectangles, and class name of the element toggling between ascending and descending.
  arrow[0].onclick = () => {
    const rectangles = document.getElementsByClassName("arrow-rect");
    const width = new Array();
    for (let i = 0; i < rectangles.length; i++) {
      width[i] = rectangles[i].width.baseVal.value;
    }

    width.reverse();

    for (let i = 0; i < rectangles.length; i++) {
      rectangles[i].setAttribute("width", width[i]);
    }

    if (arrow[0].getAttribute("class") == "arrow asc") {
      arrow[0].setAttribute("class", "arrow dsc");
      states.order = "arrow dsc";
    } else {
      arrow[0].setAttribute("class", "arrow asc");
      states.order = "arrow asc";
    }

    states.sorting();
  };

  let clear = document.getElementById("clear-search");
  let searchBar = document.getElementById("search");
  //set the clear button to display=none initially;
  clear.style.display = "none";

  /* looks up if the typed value is included in any of the recipes titles,sets the display,and returns a new
    list with the displayed recipes*/
  let search = (value) => {
    if (value.length == 0 || value == "") {
      clear.style.display = "none";
    } else {
      clear.style.display = "initial";
    }

    for (let i = 0; i < recipesSorted.length; i++) {
      if (recipesSorted[i].title.toLowerCase().trim().includes(value)) {
        recipesSorted[i].style.display = "flex";
      } else {
        recipesSorted[i].style.display = "none";
      }
    }

    let searchResults = displayed(recipesSorted);

    let newlist = new Array();
    newlist = [];
    for (let i = 0; i < searchResults.length; i++) {
      for (let j = 0; j < recipeList.length; j++) {
        if (searchResults[i].title == recipeList[j].name) {
          newlist.push(recipeList[j]);
        }
      }
    }
    return newlist;
  };

  //on keyup, set the seachText variable in states object,and call sorting function.
  $("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase().trim();
    states.searchText = value;
    states.sorting();
  });

  //when clicked, the clear button empties the search field,and returns all the elements to display=flex.
  clear.onclick = () => {
    searchBar.value = "";
    states.searchText = "";
    states.sorting();
  };

  // in case no results are found,display the no Result element.
  let noResult = document.getElementById("no-result");

  // an object that controls the state of the sorting based on the sorting buttons that are pressed.
  const states = {
    type: "alpha",
    order: "",
    searchText: "",
    sorting: async function () {
      // console.trace();

      let orderedList = await search(this.searchText);
      console.log(orderedList);

      if (orderedList.length == 0) {
        noResult.style.display = "initial";
      } else {
        noResult.style.display = "none";
      }
      if (this.type == "alpha") {
        alphasort(orderedList);
        selected(0);
      }

      if (this.type == "kcal") {
        kcalsort(orderedList);
        selected(1);
      }

      if (this.type == "time") {
        timesort(orderedList);
        selected(2);
      }

      if (this.order == "arrow dsc") {
        reverse();
      }
    },
  };

  states.sorting();
});
