const selected_image = (options) => {
  const { content, ul, index } = options;
  const images = content.childNodes;
  const listItems = ul.childNodes;
  for (let i = 0; i < images.length; i++) {
    if (i != index) {
      images[i].classList.remove("activeImg");
      listItems[i].classList.remove("active");
    }
  }
  images[index].classList.add("activeImg");
  listItems[index].classList.add("active");
};

export { selected_image };
