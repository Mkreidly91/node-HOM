import { getRecipes } from "./modules/fetch-recipes.js";
import {
  gallery_fill,
  create_carousels,
  nested_carousel,
  active_element,
} from "./modules/new-logic.js";

function main() {
  page();
}

let page = async () => {
  let recipe = await getRecipes();
  gallery_fill(recipe);
  let carousels = create_carousels(recipe);
  nested_carousel(carousels);

  $(".recipe").click(function () {
    active_element(this);
    $("#myModal").modal("handleUpdate");
    $("#myModal").modal("show");
  });

  let elements = document.getElementsByClassName("recipe");
  let animationTimer = 1000;
  $("#next").click(() => {
    $("#myModal").modal("hide");
    setTimeout(() => {
      let current = active_element();
      active_element(elements[current + 1]);
      $("#myModal").modal("show");
    }, animationTimer);
  });

  $("#previous").click(() => {
    $("#myModal").modal("hide");
    setTimeout(() => {
      let current = active_element();
      active_element(elements[current - 1]);
      $("#myModal").modal("show");
    }, animationTimer);
  });

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
    }, 1000);
  });
};

main();
