let gallery_fill = (recipeList) => {
  // let recipeListener = {};
  // document.addEventListener("build", (event) => {
  //   console.log(event, "called");
  // });
  // return;
  let row = document.getElementsByClassName("row");
  for (let i = 0; i < recipeList.length; i++) {
    var col = document.createElement("div");
    col.setAttribute("class", "col-1 recipe");
    col.setAttribute("id", i);
    col.setAttribute("title", recipeList[i].name);

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
    let displayTime = (mins) => {
      let time = mins / 60;
      let hours = Math.floor(time);
      let minutes = Math.round((time - hours) * 60);
      if (hours == 0) {
        return minutes + "min(s)";
      }
      if (minutes == 0) {
        return hours + " hour(s)";
      } else {
        return hours + " hour(s)," + minutes + " min(s)";
      }
    };
    kcal.innerHTML = recipeList[i].kcal + " kcal/" + recipeList[i].servingType;
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

let create_carousels = (recipes) => {
  let recipe_carousels = [];
  for (let i = 0; i < recipes.length; i++) {
    let content = [];
    let recipe = recipes[i];
    const ul = [];

    for (let x = 0; x < recipe.src.length; x++) {
      //creates new carousel-item
      let new_div;
      if (x == 0) {
        new_div = document.createElement("div");
        new_div.setAttribute("class", "carousel-item active");
        new_div.setAttribute("id", "active");
      } else {
        new_div = document.createElement("div");
        new_div.setAttribute("class", "carousel-item");
      }

      let li = document.createElement("li");
      li.setAttribute("class", "item" + (x + 1));

      //creates image element inside the carousel-item,then sets the src,and appends it to div.
      var img = document.createElement("img");
      img.setAttribute("src", "static/src/recipes/" + recipe.src[x]);
      new_div.appendChild(img);
      content.push(new_div);

      //appends the list items to the ul.
      ul.push(li);
    }

    // recipe_carousels[recipe.name] = {
    //   content: content,
    //   indicators: ul,
    // };
    recipe_carousels.push({
      name: recipe.name,
      content: content,
      indicators: ul,
    });
  }

  return recipe_carousels;
};

let nested_carousel = (recipes) => {
  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    let new_div;

    //create slideshow and indicators for nested carousel.
    new_div = document.createElement("div");
    new_div.setAttribute("class", "carousel-item");
    let carousel = document.createElement("div");
    carousel.setAttribute("class", "carousel slide");
    carousel.setAttribute("id", recipe.name + " carousel");

    let slideshow = document.createElement("div");
    slideshow.setAttribute("class", "carousel-inner");
    slideshow.setAttribute("id", recipe.name + " slideshow");

    let indicators = document.createElement("ul");
    indicators.setAttribute("class", "carousel-indicators");
    indicators.setAttribute("id", recipe.name + " indicators");

    for (let i = 0; i < recipe.indicators.length; i++) {
      indicators.appendChild(recipe.indicators[i]);
    }

    for (let i = 0; i < recipe.content.length; i++) {
      slideshow.appendChild(recipe.content[i]);
    }

    carousel.appendChild(indicators);
    carousel.appendChild(slideshow);
    new_div.appendChild(carousel);
    new_div.setAttribute("id", recipe.name);

    //append nested carousel to main carousel
    document.getElementById("slideshow").appendChild(new_div);
  }
};

//sets the active element,or returns the index of active element if no argument is provided.
let active_element = (element) => {
  let slideshow = document.getElementById("slideshow").children;
  if (element) {
    let name = element.title;
    for (let slide of slideshow) {
      if (name === slide.id) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
      let carousel = document.getElementById(name + " carousel");
      let indicators = document.getElementById(name + " indicators");

      $(carousel).carousel("pause");
      for (let i = 0; i < indicators.children.length; i++) {
        let child = indicators.children[i];
        $(child).click(function () {
          $(carousel).carousel(i);
        });
      }
    }
  } else {
    for (let i = 0; i < slideshow.length; i++) {
      if (slideshow[i].classList.contains("active")) {
        return i;
      }
    }
  }
};

export { gallery_fill, create_carousels, nested_carousel, active_element };
