//create a dom element
const createDomElement = (elementType, options) => {
  const element = document.createElement(elementType);
  if (options)
    Object.keys(options).forEach((key) => {
      element.setAttribute(key, options[key]);
    });

  return element;
};

//appending multiple nodes to an element
const appendMany = (element, args) => {
  for (const arg of args) {
    element.appendChild(arg);
  }
};

//helper function for displaying time.
const displayTime = (mins) => {
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

//compare arrays
const recipeArraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export { createDomElement, appendMany, displayTime, recipeArraysEqual };
