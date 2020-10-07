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
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');  /* original html code before modification */ 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilder = function () {
    let = htmlCode = '';
    for (section of sections) {
        let tempID = section.id;
        let tempDataNav = section.dataset.nav;
        htmlCode += `<li><a class="menu__link ${tempID}"  href="#${tempID}"> ${tempDataNav} </a> </li>` + "\n";
    } 
    navbarList.innerHTML = htmlCode;
    console.log(navbarList.innerHTML);
}
navBuilder()

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


