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

const create_tabs = (recipe, index) => {
  const ul = createDomElement("ul", {
    id: "indicator-" + index,
    role: "tablist",
    class: "carousel-indicators nav nav-pills",
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
    const tabPane = createDomElement("div", {
      class: `tab-pane tab-pane-${x} ${x === 0 ? "active" : ""}`,
      id: "step" + index + x,
    });
    const img = createDomElement("img", {
      src: "static/src/recipes/" + recipe.src[x],
    });
    const li = createDomElement("li", {
      class: `nav-item ${x === 0 ? "active" : ""}`,
    });
    //creates image element inside the carousel-item,then sets the src,and appends it to div.
    tabPane.appendChild(img);
    tabContent.appendChild(tabPane);
    //appends the list items to the ul.
    li.appendChild(
      createDomElement("div", {
        class: "nav-link",
        href: "#step" + index + x,
        "data-toggle": "pill",
      })
    );
    ul.appendChild(li);
  }
  innerCarousel.appendChild(tabContent);
  innerCarousel.appendChild(content);
  return { content: innerCarousel, ul };
};

const carousel_fill = (recipes) => {
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const { content, ul } = create_tabs(recipe, i);
    const carouselItem = createDomElement("div", {
      class: `carousel-item ${i === 0 ? "active" : ""}`,
      id: "recipe-item-" + i,
    });
    carouselItem.appendChild(content);
    carouselItem.appendChild(ul);
    document.getElementById("slideshow").appendChild(carouselItem);
  }
};

export { gallery_fill, carousel_fill };
