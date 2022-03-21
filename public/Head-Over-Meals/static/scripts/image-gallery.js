//Define the recipes to be displayed,along with part of the url for each image.
const cbb = {
  name: "Chocolate Banana Bread",
  kcal: 180,
  time: 60,
  servings:"15 pieces",
  servingType:"piece",
  src: [
    "chocolate-banana-bread/cover.jpeg",
    "chocolate-banana-bread/recipe-1.jpeg",
    "chocolate-banana-bread/recipe-2.jpeg",
    "chocolate-banana-bread/recipe-3.jpeg",
    "chocolate-banana-bread/recipe-4.jpeg",
    "chocolate-banana-bread/enjoy.jpeg"
  ]
};

const cbo = {
  name: "Chocolate Banana Oatmeal",
  kcal: 180,
  time: 10,
  servings:"2 cups" ,
  servingType:"cup",
  src: [
    "chocolate-banana-oatmeal/cover.jpeg",
    "chocolate-banana-oatmeal/recipe.jpeg"
  ]
};
const apo = {
  name: "Apple Pie Oatmeal",
  kcal: 240,
  time: 10,
  servings:"1 serving" ,
  servingType:"serving",
  src: ["apple-pie-oatmeal/cover.jpeg", "apple-pie-oatmeal/recipe.jpeg"]
};

const wcoc = {
  name: "White Chocolate Oatmeal Cookies",
  kcal: 160,
  time: 30,
  servings:"15 cookies" ,
  servingType:"cookie",
  src: [
    "white-chocolate-oatmeal-cookies/cover.jpeg",
    "white-chocolate-oatmeal-cookies/recipe-1.jpeg",
    "white-chocolate-oatmeal-cookies/recipe-2.jpeg"
  ]
};
const ab = {
  name: "Almond Butter",
  kcal:45,
  time:20,
  servings:"1 jar" ,
  servingType:"1 tsp",
  src: [
    "almond-butter/cover.jpeg",
    "almond-butter/recipe-1.jpeg",
    "almond-butter/recipe-2.jpeg",
    "almond-butter/recipe-3.jpeg"
  ]
};
const wwm = {
  name: "Whole Wheat Manakeesh",
  kcal:100,
  time:165,
  servings:"10 pieces" ,
  servingType:"piece",
  src: [
    "whole-wheat-manakeesh/cover.jpeg",
    "whole-wheat-manakeesh/recipe-1.jpeg",
    "whole-wheat-manakeesh/recipe-2.jpeg"
  ]
};
const ma = {
  name: "Mhallabeyye Amareddine",
  kcal:180,
  time:70,
  servings:"6 bowls" ,
  servingType:"bowl",
  src: [
    "mhallabeyye-amareddine/cover.jpg",
    "mhallabeyye-amareddine/recipe-1.jpg",
    "mhallabeyye-amareddine/recipe-2.jpg"
  ]
};
const hlc = {
   name: "Healthy Lazy Cake",
  kcal: 170,
  time:165,
  servings:"10 slices" ,
  servingType:"slice",
  src: [
    "healthy-lazy-cake/cover.jpg",
    "healthy-lazy-cake/recipe-1.jpg",
    "healthy-lazy-cake/enjoy.jpg"
  ]
};
const occp ={
   name: "Oatmeal Cherry Crumble Pie",
  kcal:240,
  time:80,
  servings:"10 slices" ,
  servingType:"slice",
  src: [
    "oatmeal-cherry-crumble-pie/cover.jpg",
    "oatmeal-cherry-crumble-pie/recipe-1.jpg",
    "oatmeal-cherry-crumble-pie/recipe-2.jpg",
    "oatmeal-cherry-crumble-pie/enjoy.jpg"
  ]
};
const cab={
   name: "Chocolate Avocado Brownies",
  kcal:150 ,
  time:45,
  servings:"9 pieces" ,
  servingType:"piece",
  src: [
    "chocolate-avocado-brownies/cover.jpg",
    "chocolate-avocado-brownies/recipe-1.jpg",
    "chocolate-avocado-brownies/enjoy.jpg"
  ]
};

const hcp = {
  name: "Healthy Chocolate Pudding",
  kcal:240,
  time:10,
  servings:"5 bowls" ,
  servingType:"bowl",
  src: [
    "healthy-chocolate-pudding/cover.jpg",
    "healthy-chocolate-pudding/recipe-1.jpg",
    "healthy-chocolate-pudding/enjoy.jpg"
  ]
};
const bm ={
  name: "Banana Muffins",
  kcal:135,
  time:45,
  servings:"12 muffins" ,
  servingType:"muffin",
  src: [
    "banana-muffins/cover.jpg",
    "banana-muffins/recipe-1.jpg"
  ]
};
const hcc = {
  name: "Healthy Chocolate Cookies",
  kcal:190,
  time:20,
  servings:"10-12 cookies" ,
  servingType:"cookie",
  src: [
    "healthy-chocolate-cookies/cover.jpg",
    "healthy-chocolate-cookies/recipe-1.jpg",
    "healthy-chocolate-cookies/recipe-2.jpg",
    "healthy-chocolate-cookies/enjoy.jpg"
  ]
};

const bb = {
  name: "Blonde Brownies",
  kcal:170 ,
  time:40,
  servings:"9 pieces" ,
  servingType:"piece",
  src: [
    "blonde-brownies/cover.jpg",
    "blonde-brownies/recipe-1.jpg",
    "blonde-brownies/recipe-2.jpg",
    "blonde-brownies/enjoy.jpg"
  ]
};

const ylc = {
   name: "Yogurt Loaf Cake",
   kcal:140 ,
   time:50,
   servings:"15 slices" ,
   servingType:"slice",
  src: [
    "yogurt-loaf-cake/cover.jpg",
    "yogurt-loaf-cake/recipe-1.jpg",
    "yogurt-loaf-cake/recipe-2.jpg",
    "yogurt-loaf-cake/enjoy.jpg"
  ]
};
const lfac = {
   name: "Low-fat Apple Cake",
  kcal:120 ,
  time:50,
  servings:"15 servings" ,
  servingType:"slice",
  src: [
    "low-fat-apple-cake/cover.jpg",
    "low-fat-apple-cake/recipe-1.jpg",
    "low-fat-apple-cake/recipe-2.jpg",
    "low-fat-apple-cake/enjoy.jpg"
  ]
};
const ecboc = {
   name: "Easy Chocolate Banana Oat Cookies",
  kcal:90,
  time:30,
  servings: "9 cookies",
  servingType:"cookie",
  src: [
    "easy-chocolate-banana-oat-cookies/cover.jpg",
    "easy-chocolate-banana-oat-cookies/recipe-1.jpg",
    "easy-chocolate-banana-oat-cookies/recipe-2.jpg",
    "easy-chocolate-banana-oat-cookies/enjoy.jpg"
  ]
};
const hcm = {
   name: "Healthy Chocolate Muffins",
  kcal:160 ,
  time:40,
  servings:"12 muffins" ,
  servingType:"muffin",
  src: [
    "healthy-chocolate-muffins/cover.jpg",
    "healthy-chocolate-muffins/recipe-1.jpg",
    "healthy-chocolate-muffins/recipe-2.jpg",
    "healthy-chocolate-muffins/enjoy.jpg"
  ]
};

//store recipes in a variable.
const recipeList = [];
recipeList.push(cbo, cbb, apo, wcoc, ab, wwm, ma, hlc, occp, cab, hcp, bm, hcc, bb, ylc, lfac, ecboc, hcm) ;

//orderedList will be the manipulated,shuffled version of recipeList based on sorting type.
let orderedList = recipeList;
let row = document.getElementsByClassName("row");

$(document).ready(function () {

   /*fills the gallery based on the bootstrap grid-system, which in this case consists of
     one row,and places each recipe in its own column,and by iterating of recipeList,
     dynamically creates the elements required to display the information of each recipe.*/

   let gallery_fill = () => {
    for (let i = 0; i < recipeList.length; i++) {
      var col = document.createElement("div");
      col.setAttribute("class", "col-1 recipe");
      col.setAttribute("id", i);
      col.setAttribute("title", recipeList[i]["name"]);

      //recipeGrid will use display:grid to arrange all the elements.
      var recipeGrid = document.createElement("div");
      recipeGrid.setAttribute("class", "recipe-grid");

      //create divs for the cover image and the title.
      var imageTitle = document.createElement("div");
      imageTitle.setAttribute("class", "image-title");
      var image = document.createElement("img");
      image.src = "static/src/recipes/" + recipeList[i].src[0];
      image.width = "300";
      image.height = "200";
      var title = document.createElement("h1");
      title.innerHTML = recipeList[i].name;


      /*var info = document.createElement("div");
      info.setAttribute("class", "info");*/
      var kcal = document.createElement("p");
      let servings = document.createElement("p");
      var prep = document.createElement("p");

      //helper function for displaying time.
      displayTime = (mins) => {
        let time = (mins / 60);
        let hours = Math.floor(time);
        let minutes =  Math.round((time - hours) * 60);
        if (hours == 0){
          return minutes + "min(s)";
        }
        if(minutes == 0){
          return hours + " hour(s)";
        }
        else{
          return hours + " hour(s)," + minutes + " min(s)";
        }
      }
      kcal.innerHTML = recipeList[i].kcal + " kcal/"+recipeList[i].servingType;
      servings.innerHTML = "Yield: " + recipeList[i].servings;
      prep.innerHTML = "Total time: " + displayTime(recipeList[i].time);

      //append all the child elements to the grid.
      recipeGrid.appendChild(image);
      recipeGrid.appendChild(title);
      recipeGrid.appendChild(kcal);
      recipeGrid.appendChild(servings);
      recipeGrid.appendChild(prep);
      col.appendChild(recipeGrid);
      row[0].appendChild(col);
    }
  };
  gallery_fill();



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
    $('#myModal').modal('handleUpdate');
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
  let loadModal = (recipe) =>{
    let loader = document.getElementById("modal-loader");
    loader.style.display = "flex";

     let activeImg = document.getElementById("active").children;
      activeImg[0].onload = () =>{
        loader.style.display = "none";
        modal_fill(recipe);
        $('#myModal').modal('show');
      };
  };

  /*adds a fading animation to the modal when pressing next or previous,
  before executing modal('hide'),and keeps the backdrop dim.*/
  let hidemodal = () => {
    $('#myModal').animate({opacity:'0'},1000);
    setTimeout(()=>{
    $("#myModal").modal('hide');
    $("#myModal").modal({backdrop: true});
    },1000);
  }

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
    setTimeout(()=>{ next_previous(i, orderedList);
    carousel_fill(orderedList, i);
    loadModal(orderedList[i]);},1000);

  });

  //when previous is clicked, fill carousel based on i--, load the modal, and call next_previous().
  $("#previous").click(() => {
    i--;
    hidemodal();
    setTimeout(()=>{ next_previous(i, orderedList);
    carousel_fill(orderedList, i);
    loadModal(orderedList[i]);},1000);
  });

  /*event listener for when hide is called,adds bootstrap display block class to modal,
  then removes it after animation is done for smooth transition on hide*/
  $("#myModal").on("hide.bs.modal", function () {
      $('#myModal').addClass("d-block")
      $('#myModal').animate({opacity:'0'},1000);
      //after animation is done,remove the display block class, since it was interfering with the custom animation.
      setTimeout(()=>{
          $('#myModal').removeClass("d-block");
      },1000);
  });

  //fades in the modal on "show" event.
  $('#myModal').on('show.bs.modal', function () {
     $('#myModal').css("opacity",0);
     $('#myModal').animate({opacity:'1'},1000);
  });


});
