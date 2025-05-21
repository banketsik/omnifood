console.log("Hello World");

const myName = "John";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

/*
const yearE1 = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearE1.textContent = currentYear;
 */

//////////////////////////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK
//////////////////////////////////////////////////////////////////////////////

const btnNavE1 = document.querySelector(".btn-mobile-nav");
const headerE1 = document.querySelector(".header");

btnNavE1.addEventListener("click", () => {
  headerE1.classList.toggle("header-active");
});

//////////////////////////////////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION
//////////////////////////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const href = link.getAttribute("href");

    //Scroll back to top
    if(href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //Scroll to other Links
    if(href !== "#" && href.startsWith("#")) {
      const sectionE1 = document.querySelector(href);
      sectionE1.scrollIntoView({
        behavior: "smooth",
      });
    }
    if(link.classList.contains("main-nav-link"))
      headerE1.classList.toggle("nav-open");
  });
});
