const iconMenu = document.querySelector(".icon");
const menuHeader = document.querySelector(".menu-list");

document.addEventListener("click", (e) => {
  if (iconMenu.contains(e.target)) {
    menuHeader.classList.toggle("hidden");
    menuHeader.classList.toggle("menu-list-responsive");
  } else {
    if (!menuHeader.contains(e.target) || iconMenu.contains(e.target)) {
      menuHeader.classList.add("hidden");
      menuHeader.classList.remove("menu-list-responsive");
    }
  }
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 1024) {
    menuHeader.classList.remove("menu-list-responsive");
    menuHeader.classList.add("hidden");
  }
});
