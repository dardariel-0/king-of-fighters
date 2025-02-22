//menu mobile

import outsideClick from "./modules/outsideclick.js";

// consts
const btnMobile = document.querySelector(".btn-open");
const menuMobile = document.querySelector(".header-items");
const eventos = ["click", "touchstart"];
const closeMenu = document.querySelector(".close-menu");

// função 1

function menuClik() {
  menuMobile.classList.toggle("ativo");
}

btnMobile.addEventListener("click", menuClik);
closeMenu.addEventListener("click", menuClik);

// função clique outside

function openMenu(event) {
  menuMobile.classList.add("ativo");
  outsideClick(menuMobile, "click", () => {
    console.log("teste");

    menuMobile.classList.remove("ativo");
  });
}

btnMobile.addEventListener("click", openMenu);
