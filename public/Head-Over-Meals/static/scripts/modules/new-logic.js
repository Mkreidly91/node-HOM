import { createDomElement, appendMany, displayTime } from "./helper.js";

let gallery_fill = (recipeList) => {
  let row = document.getElementsByClassName("row");
  for (let i = 0; i < recipeList.length; i++) {
    const col = createDomElement("div", {
      class: "col-1 recipe",
      id: i,
      title: recipeList[i].name,
    });

    //recipeGrid will use display:grid to arrange all the elements.
    const recipeGrid = createDomElement("div", {
      class: "recipe-grid",
    });

    //create divs for the cover image and the title.
    const imageTitle = createDomElement("div", {
      class: "image-title",
    });

    const image = createDomElement("img", {
      src: `static/src/recipes/${recipeList[i].src[0]}`,
      width: "300",
      height: "200",
    });

    const title = createDomElement("h1");
    title.innerText = recipeList[i].name;

    const kcal = createDomElement("p");
    const servings = createDomElement("p");
    const prep = createDomElement("p");

    kcal.innerText = `${recipeList[i].kcal} kcal ${recipeList[i].servingType}`;
    servings.innerText = `Yield: ${recipeList[i].servings}`;
    prep.innerText = `Total time: ${displayTime(recipeList[i].time)}`;

    //append all the child elements to the grid.
    appendMany(recipeGrid, [image, title, kcal, servings, prep]);
    col.appendChild(recipeGrid);
    row[0].appendChild(col);
  }
};

const create_tabs = (recipe, i) => {
  const content = createDomElement("div", {
    id: `imageTab-${i}`,
  });

  const ul = createDomElement("div", {
    class: "carousel-indicators",
    id: `indicator-${i}`,
  });

  const innerTabs = createDomElement("div", {
    class: "inner-tabs",
    id: `inner-tab-${i}`,
  });

  const tabContent = createDomElement("div", {
    class: "tab-content",
  });

  //creates tab-panes for each image,and and appends it to tab content.
  for (let x = 0; x < recipe.src.length; x++) {
    const div_options =
      x == 0
        ? { class: `tab-pane active tab-${x}`, id: `step-${i}-${x}` }
        : { class: `tab-pane tab-${x}`, id: `step-${i}-${x}` };

    const new_div = createDomElement("div", div_options);
    const img = createDomElement("img", {
      src: `static/src/recipes/${recipe.src[x]}`,
    });

    const li = createDomElement("li", {
      class: `item-${x + 1}`,
      "data-target": `#step-${i}-${x}`,
      "data-toggle": "tab",
    });

    $(li).click(() => {
      $(content).carousel(x);
    });

    new_div.appendChild(img);
    tabContent.appendChild(new_div);
    ul.appendChild(li);
  }
  appendMany(innerTabs, [content, tabContent]);
  return { content: innerTabs, ul };
};

const carousel_fill = (recipes) => {
  let slideshow = document.getElementById("slideshow");
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const { content, ul } = create_tabs(recipe, i);
    const carouselItem =
      i == 0
        ? createDomElement("div", {
            class: "carousel-item active",
            id: `recipe-item-${i}`,
          })
        : createDomElement("div", {
            class: "carousel-item",
            id: `recipe-item-${i}`,
          });
    appendMany(carouselItem, [content, ul]);
    slideshow.appendChild(carouselItem);
  }
};

export { gallery_fill, carousel_fill };
