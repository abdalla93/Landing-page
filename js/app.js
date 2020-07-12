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

function addLi(index) {
  const section = `Section ${index + 1}`;
  const newLi = `<li
   class="menu__link"><a href="#section${index + 1}">${section}</a></li>`;
  navBar.insertAdjacentHTML("beforeend", newLi);
}

function ElementListener(section, index) {
  addLi(index);
  document.addEventListener("scroll", () => {
    if (isSectionInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}
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

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
