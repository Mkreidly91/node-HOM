
const createDomElement = (elementType, options) => {
  const element = document.createElement(elementType);
  Object.keys(options).forEach((key) => {
    element.setAttribute(key, options[key]);
  });
  return element;
};

const gallery_fill = (recipeList) => {
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


const create_img_carousel = (recipe, index) => {
  const ul = createDomElement("ul", {
    id: "indicator-" + index,
    class: "carousel-indicators",
  });
  const content = createDomElement("div", {
    id: "imageTabs" + index,
  });
  const innerCarousel = createDomElement("div", {
    class: "inner-tabs",
    id: "inner-" + index,
  });
  const tabContent = createDomElement("div", {
    class: "tab-content",
  });
  for (let x = 0; x < recipe.src.length; x++) {
    const new_div_options =
      x == 0
        ? { class: "tab-pane active tab-pane" + x, id: "step" + index + x }
        : { class: "tab-pane tab-pane" + x, id: "step" + index + x };
    const new_div = createDomElement("div", new_div_options);
    const img = createDomElement("img", {
      src: "static/src/recipes/" + recipe.src[x],
    });
    const liOptions =
      x === 0
        ? {
            class: "active",
            "data-target": "#step" + index + x,
            "data-toggle": "tab",
          }
        : { "data-target": "#step" + index + x, "data-toggle": "tab" };
    const li = createDomElement("li", {
      class: "item" + (x + 1),
      "data-target": "#step" + index + x,
      "data-toggle": "tab",
    });
    $(li).click(function () {
      $(content).carousel(x);
    });
    //creates image element inside the carousel-item,then sets the src,and appends it to div.
    new_div.appendChild(img);
    tabContent.appendChild(new_div);
    //appends the list items to the ul.
    ul.appendChild(li);
  }
  innerCarousel.appendChild(content);
  innerCarousel.appendChild(tabContent);
  return { content: innerCarousel, ul };
};

const create_carousels = (recipes) => {
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const { content, ul } = create_img_carousel(recipe, i);
    const carouselItem = createDomElement("div", { class: "carousel-item", id: "recipe-item-" + i })
    carouselItem.appendChild(content);
    carouselItem.appendChild(ul);
    document.getElementById("slideshow").appendChild(carouselItem);
  }
};

export {
  gallery_fill,
  create_carousels,
};
