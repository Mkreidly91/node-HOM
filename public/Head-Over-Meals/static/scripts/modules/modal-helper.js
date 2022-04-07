const selected = (content, index) => {
  const children = content.childNodes;
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("activated");
    children[i].classList.add("transition");
  }
  //   children[index].classList.remove("transition");
  children[index].classList.remove("transition");
  children[index].classList.add("activated");
};

export { selected };
