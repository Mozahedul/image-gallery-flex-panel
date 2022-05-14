const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
  let item = document.querySelector(".open");

  // remove all .open classes from elements
  if (item !== null) {
    item.classList.remove("open");
  }

  // add the class .open to current target element
  if (!e.currentTarget.classList.contains("open")) {
    this.classList.add("open");
  }
  return;
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive),
);
