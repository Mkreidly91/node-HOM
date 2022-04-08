//This script toggles the hamburger icon's on and off state, triggering the hamburger icon and the navbar item animation.

document.addEventListener("DOMContentLoaded", function () {
  var navButton = document.getElementsByClassName("navbar-button");
  var upperLine = document.getElementById("upper-line");
  var lowerLine = document.getElementById("lower-line");
  var navSvg = document.getElementById("navbar-svg");
  var navCurve = document.getElementById("navbar-curve");
  var navWindow = document.getElementById("nav-window");
  var navList = document.getElementById("nav-list");

  //set nav to scaleY 0 initially, so it doesnt cover other elements in the page;
  navWindow.style.transform = "scaleY(0)";

  let on = () => {
    navButton[0].setAttribute("class", "navbar-button on");

    upperLine.style.animation = "x-upper-on 1s linear forwards";
    lowerLine.style.animation = "x-lower-on 1s linear forwards";

    navWindow.style.transform = "scaleY(1)";
    navWindow.style.msTransform = "scaleY(1)"; //IE
    navWindow.style.webkitTransform = "scaleY(1)"; //Chrome and Safari
    navWindow.style.MozTransform = "scaleY(1)"; //Firefox
    navWindow.style.OTransform = "scaleY(1)";

    navSvg.style.transform = "scaleY(3)";
    navSvg.style.msTransform = "scaleY(3)"; //IE
    navSvg.style.webkitTransform = "scaleY(3)"; //Chrome and Safari
    navSvg.style.MozTransform = "scaleY(3)"; //Firefox
    navSvg.style.OTransform = "scaleY(3)";

    navCurve.style.animationPlayState = "running";
    navCurve.style.msAnimationPlayState = "running"; //IE
    navCurve.style.webkitAnimationPlayState = "running"; //Chrome and Safari
    navCurve.style.MozAnimationPlayState = "running"; //Firefox
    navCurve.style.OAnimationPlayState = "running";

    navList.style.animation = "nav-load-in 200ms ease-in-out 600ms forwards";
  };

  let off = () => {
    navButton[0].setAttribute("class", "navbar-button off");

    upperLine.style.animation = "x-upper-off 1s linear forwards";
    lowerLine.style.animation = "x-lower-off 1s linear forwards";

    navSvg.style.transform = "scaleY(1)";
    navSvg.style.msTransform = "scaleY(1)"; //IE
    navSvg.style.webkitTransform = "scaleY(1)"; //Chrome and Safari
    navSvg.style.MozTransform = "scaleY(1)"; //Firefox
    navSvg.style.OTransform = "scaleY(1)";

    navCurve.style.animationPlayState = "paused";
    navCurve.style.msAnimationPlayState = "paused"; //IE
    navCurve.style.webkitAnimationPlayState = "paused"; //Chrome and Safari
    navCurve.style.MozAnimationPlayState = "paused"; //Firefox
    navCurve.style.OAnimationPlayState = "paused";

    navWindow.style.transform = "scaleY(0)";
    navWindow.style.msTransform = "scaleY(0)"; //IE
    navWindow.style.webkitTransform = "scaleY(0)"; //Chrome and Safari
    navWindow.style.MozTransform = "scaleY(0)"; //Firefox
    navWindow.style.OTransform = "scaleY(0)";

    navList.style.animation = "nav-load-out 200ms ease-in-out 600ms ";
  };

  //toggles between on and off state.
  navButton[0].onclick = () => {
    if (navButton[0].getAttribute("class") == "navbar-button off") {
      on();
    } else {
      off();
    }
  };
});
