const alpha = document.getElementById("alphabet");
const cal = document.getElementById("calories");
const time = document.getElementById("time");
const arrow = document.getElementsByClassName("arrow");
const sortListItem = document.getElementsByClassName("sort-list-item");
let searchBar = document.getElementById("search");
let clear = document.getElementById("clear-search");
let noResult = document.getElementById("no-result");

//controls the sorting buttons,by adding and removing a "selected" class.
const selected = (x) => {
  sortListItem[x].classList.add("selected");
  for (let i = 0; i < sortListItem.length; i++) {
    if (i != x) {
      sortListItem[i].classList.remove("selected");
    }
  }
};

//controls the clear button display
let clearButton = (value) => {
  if (value.length == 0 || value == "") {
    clear.style.display = "none";
  } else {
    clear.style.display = "initial";
  }
};
const clicks = (states) => {
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
      states.reverse = true;
    } else {
      arrow[0].setAttribute("class", "arrow asc");
      states.reverse = false;
    }
    states.sorting();
  };

  $("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase().trim();
    states.searchText = value;
    states.sorting();
  });

  clear.onclick = () => {
    searchBar.value = "";
    states.searchText = "";
    states.sorting();
  };

  const position = (option) => {
    const index = (id) => states.ids.indexOf(id);
    let next;
    let previous;
    if (option === "next") {
      index(id) === states.length - 1
        ? (next = states.ids[0])
        : (next = states.ids[index(id) + 1]);
      id = next;
      return next;
    } else if (option === "previous") {
      index(id) === 0
        ? (previous = states.ids[states.ids.length - 1])
        : (previous = states.ids[index(id) - 1]);
      id = previous;
      return previous;
    }
  };

  $(".recipe").click(function () {
    const id = parseInt(this.id);
    $("#myCarousel").carousel(id);
    $("#myModal").modal("show");
    $("#myModal").modal("handleUpdate");
  });
};

const animationTimer = 1000;
const modal_animations = () => {
  $("#myModal").on("show.bs.modal", function () {
    $("#myModal").css("opacity", 0);
    $("#myModal").animate({ opacity: "1" }, animationTimer);
  });

  $("#myModal").on("hide.bs.modal", function () {
    $("#myModal").addClass("d-block");
    $("#myModal").animate({ opacity: "0" }, animationTimer);
    //after animation is done,remove the display block class, since it was interfering with the custom animation.
    setTimeout(() => {
      $("#myModal").removeClass("d-block");
    }, animationTimer);
  });
};
export { clicks, clearButton, modal_animations };
