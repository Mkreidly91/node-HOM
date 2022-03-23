import { getRecipes } from "./modules/fetch-recipes.js";
import {
  gallery_fill,
  create_carousels,
} from "./modules/new-logic.js";

const animationTimer = 1000;

function main() {
  page();
}

let page = async () => {
  let recipe = await getRecipes();
  gallery_fill(recipe);
  create_carousels(recipe);
  
  $(".recipe").click(function () {
    const id = parseInt(this.id);
    $("#myCarousel").carousel(id);
    $("#myModal").modal("show");
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
    }, animationTimer);
  });
};

main();
