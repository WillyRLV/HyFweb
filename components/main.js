/*MOSTRAR MENU*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  sectioncl = document.getElementById("main");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }



if (sectioncl) {
  
  sectioncl.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
  })
}



  //? REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");
linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));


/*CHANGE BACKGOUND HEADER]============================*/

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 60) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);