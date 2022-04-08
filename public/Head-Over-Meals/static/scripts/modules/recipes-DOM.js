import { createDomElement, appendMany, displayTime } from "./helper.js";
import { selected_image } from "./modal-helper.js";
const slideshow = document.getElementById("slideshow");
const row = document.getElementsByClassName("row")[0];
const closeButton = document.getElementsByClassName("close")[0];

const gallery_fill = (recipeList) => {
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
    row.appendChild(col);
  }
};

const create_tabs = (recipe, index) => {
  const ul = createDomElement("ul", {
    id: "indicators" + index,
    class: "carousel-indicators",
  });
  const content = createDomElement("div", {
    id: "imageContainer" + index,
    class: "imageContainer",
  });

  for (let x = 0; x < recipe.src.length; x++) {
    const img = createDomElement("img", {
      class: `item ${x === 0 ? "activeImg" : ""}`,
      src: "static/src/recipes/" + recipe.src[x],
    });
    const li = createDomElement("li", {
      class: `${x === 0 ? "active" : ""}`,
    });

    content.appendChild(img);
    ul.appendChild(li);
  }
  const buttons = ul.childNodes;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      selected_image({
        content: content,
        ul: ul,
        index: i,
      });
    };
  }

  return { content: content, ul };
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

const clearDom = () => {
  slideshow.innerHTML = "";
  row.innerHTML = "";
};

const refreshDom = (recipeList) => {
  clearDom();
  gallery_fill(recipeList);
  carousel_fill(recipeList);

  $(".recipe").click(function () {
    const id = parseInt(this.id);
    const imageContainer = document.getElementById(`imageContainer${id}`);
    const ul = document.getElementById(`indicators${id}`);

    $("#myCarousel").carousel(id);
    $("#myModal").modal("show");
    $("#myModal").modal("handleUpdate");
    $("#myModal").on("hide.bs.modal", function () {
      selected_image({
        content: imageContainer,
        ul: ul,
        index: 0,
      });
    });
  });
};

export { refreshDom };
