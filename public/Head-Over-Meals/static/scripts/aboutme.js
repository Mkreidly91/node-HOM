// a script for the "about us" page that animates the elements based on if the elements are in viewport.

//calculates if the element is in viewport.
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function () {
  $("#image").css("opacity", "0");
  $("#image-quote p").css("opacity", "0");
  setTimeout(() => {
    $("#image").addClass("right-in");
    $("#image-quote p").addClass("bottom-in");
  }, 1500);

  $("body").on("load resize scroll", function () {
    $("#image").css("opacity", "0");
    $("#image-quote p").css("opacity", "0");
    setTimeout(() => {
      $("#image").addClass("right-in");
      $("#image-quote p").addClass("bottom-in");
    }, 1500);

    $("#image").each(function () {
      if ($(this).isInViewport()) {
        $("#image").addClass("right-in");
      } else {
        $("#image").removeClass("right-in");
        $("#image").css("opacity", "0");
      }
    });

    $("#image-quote p").each(function () {
      if ($(this).isInViewport()) {
        $("#image-quote p").addClass("bottom-in");
      } else {
        $("#image-quote p").removeClass("bottom-in");
        $("#image-quote p").css("opacity", "0");
      }
    });
    $("#about-text").each(function () {
      if ($(this).isInViewport()) {
        $("#about-text").addClass("bottom-in");
      } else {
        $("#about-text").removeClass("bottom-in");
        $("#about-text").css("opacity", "0");
      }
    });
    $("#about-image").each(function () {
      if ($(this).isInViewport()) {
        $("#about-image").addClass("left-in");
      } else {
        $("#about-image").removeClass("left-in");
        $("#about-image").css("opacity", "0");
      }
    });
  });
});
