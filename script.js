// create Button To Top
const ButtonToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    ButtonToTop.style.display = "block";
  } else {
    ButtonToTop.style.display = "none";
  }
});

ButtonToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// create Menu
const menu = document.getElementsByClassName("menu")[0];
const menuSpanOne = document.getElementsByClassName("span")[0];
const menuSpanTwo = document.getElementsByClassName("span")[1];
const menuSpanThree = document.getElementsByClassName("span")[2];
const showMenu = document.getElementsByClassName("showMenu")[0];

menu.addEventListener("click", () => {
  menuSpanOne.classList.toggle("active");
  menuSpanTwo.classList.toggle("active");
  menuSpanThree.classList.toggle("active");
  showMenu.classList.toggle("active");
});

// active link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  function setActiveLink(clickedLink) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    clickedLink.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      setActiveLink(link);
    });
  });

  setActiveLink(navLinks[0]);
});
