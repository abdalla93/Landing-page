/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navBar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

sections.forEach(ElementListener);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function isSectionInViewport(section) {
  let size = section.getBoundingClientRect();

  return (
    size.top >= 0 &&
    size.left >= 0 &&
    size.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    size.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
function ElementListener(section) {
  addLi(section);
  document.addEventListener("scroll", () => {
    if (isSectionInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

// build the nav
function addLi(section) {
  const newLi = `<li
   class="menu__link"><a href="#${section.id}">${section.dataset.nav}</a></li>`;
  navBar.insertAdjacentHTML("beforeend", newLi);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
// href="#section${index + 1}"
