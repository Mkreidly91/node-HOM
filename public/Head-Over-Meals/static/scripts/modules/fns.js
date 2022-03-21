//fills carousel
function carousel_fill(item, id) {
  //loops over the item urls and creates a new img element for each,then plugs in the src.
  carousel_clear();
  for (let x = 0; x < item[id].src.length; x++) {
    var new_div;

    //creates new carousel-item
    if (x == 0) {
      new_div = document.createElement("div");
      new_div.setAttribute("class", "carousel-item active");
      new_div.setAttribute("id", "active");
    } else {
      new_div = document.createElement("div");
      new_div.setAttribute("class", "carousel-item");
    }

    li = document.createElement("li");
    li.setAttribute("class", "item" + (x + 1));

    //creates image element inside the carousel-item,then sets the src,and appends it to div.
    var img = document.createElement("img");
    img.setAttribute("src", "static/src/recipes/" + item[id].src[x]);
    new_div.appendChild(img);
    //appends the list items to the ul.
    document.getElementById("indicators").appendChild(li);

    //append the div to the carousel-inner element.
    document.getElementById("slideshow").appendChild(new_div);
  }
  // Create Carousel Indicators
  $("#myCarousel").carousel({ interval: false });
  var indicators = document.getElementById("indicators");
  for (let i = 0; i < indicators.children.length; i++) {
    var child = indicators.children[i];
    $("." + child.className).click(function () {
      $("#myCarousel").carousel(i);
    });
  }
}
//clears carousel to make room for new images,is called at the start of carousel_fill();
let carousel_clear = () => {
  var slideshow = document.getElementById("slideshow");
  var indicators = document.getElementById("indicators"); // Get the <ul> element with id="myList"

  while (slideshow.firstChild) {
    slideshow.removeChild(slideshow.firstChild);
  }

  while (indicators.firstChild) {
    indicators.removeChild(indicators.firstChild);
  }
};
//fills the modal
let modal_fill = (element) => {
  $("#myModal").modal("handleUpdate");
  $("#myModal").modal();
};

/*value of i will be used to store the selected element's order in $(".recipe").click() and
    $("#next").click() and $("#previous").click()*/
let i;
let next = document.getElementById("next");
let previous = document.getElementById("previous");

//determines if theres a next element or previous one, and toggles the display of the next and previous buttons.
let next_previous = (i, orderedList) => {
  if (orderedList.indexOf(orderedList[i + 1]) == -1) {
    next.style.display = "none";
  } else {
    next.style.display = "initial";
  }
  if (orderedList.indexOf(orderedList[i - 1]) == -1) {
    previous.style.display = "none";
  } else {
    previous.style.display = "initial";
  }
};

//loads the modal smoothly by waiting for the 1st image to load before filling the modal and showing it.
let loadModal = (recipe) => {
  let loader = document.getElementById("modal-loader");
  loader.style.display = "flex";

  let activeImg = document.getElementById("active").children;
  activeImg[0].onload = () => {
    loader.style.display = "none";
    modal_fill(recipe);
    $("#myModal").modal("show");
  };
};

/*adds a fading animation to the modal when pressing next or previous,
  before executing modal('hide'),and keeps the backdrop dim.*/
let hidemodal = () => {
  $("#myModal").animate({ opacity: "0" }, 1000);
  setTimeout(() => {
    $("#myModal").modal("hide");
    $("#myModal").modal({ backdrop: true });
  }, 1000);
};

//when a recipe is clicked, fill carousel, load the modal, and call next_previous().
$(".recipe").click(function () {
  i = parseInt(this.style.order) - 1;
  carousel_fill(orderedList, i);
  loadModal(orderedList[i]);
  next_previous(i, orderedList);
});

//when next is clicked, fill carousel based on i++, load the modal, and call next_previous().
$("#next").click(() => {
  i++;
  hidemodal();
  setTimeout(() => {
    next_previous(i, orderedList);
    carousel_fill(orderedList, i);
    loadModal(orderedList[i]);
  }, 1000);
});

//when previous is clicked, fill carousel based on i--, load the modal, and call next_previous().
$("#previous").click(() => {
  i--;
  hidemodal();
  setTimeout(() => {
    next_previous(i, orderedList);
    carousel_fill(orderedList, i);
    loadModal(orderedList[i]);
  }, 1000);
});

/*event listener for when hide is called,adds bootstrap display block class to modal,
  then removes it after animation is done for smooth transition on hide*/
$("#myModal").on("hide.bs.modal", function () {
  $("#myModal").addClass("d-block");
  $("#myModal").animate({ opacity: "0" }, 1000);
  //after animation is done,remove the display block class, since it was interfering with the custom animation.
  setTimeout(() => {
    $("#myModal").removeClass("d-block");
  }, 1000);
});

//fades in the modal on "show" event.
$("#myModal").on("show.bs.modal", function () {
  $("#myModal").css("opacity", 0);
  $("#myModal").animate({ opacity: "1" }, 1000);
});
