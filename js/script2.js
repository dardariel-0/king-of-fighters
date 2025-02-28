//menu mobile
const btnMobile = document.querySelector(".btn-open");
const menuMobile = document.querySelector(".header-items");
const closeMenu = document.querySelector(".close-menu");

btnMobile.onclick = function () {
  menuMobile.classList.add("ativo");
};

closeMenu.onclick = function () {
  menuMobile.classList.remove("ativo");
};

document.onclick = function (evento) {
  if (
    !btnMobile.contains(evento.target) &&
    !menuMobile.contains(evento.target)
  ) {
    menuMobile.classList.remove("ativo");
  }
};
