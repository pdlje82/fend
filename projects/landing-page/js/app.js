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
        const tempID = section.id;
        const tempDataNav = section.dataset.nav;
        htmlCode += `<li><a class="menu__link ${tempID}"  href="#${tempID}"> ${tempDataNav} </a> </li>` + "\n";
    } 
    navbarList.innerHTML = htmlCode;
    /*console.log(navbarList.innerHTML);*/
}
navBuilder()

// Add class 'active' to section when near top of viewport
function isElementVisible(sections) {
    for (section of sections) {
        const rect = section.getBoundingClientRect();
        /*console.log(rect.top, rect.height / 3)*/
        if (rect.top <= rect.height / 3 && rect.top >= -rect.height / 3) {
            section.classList.add("your-active-class");
        }
        else {
            section.classList.remove("your-active-class");
        }
    }
}
document.addEventListener('scroll', function() {
    isElementVisible(sections);
});


// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/
const anchorList = document.querySelectorAll('a');
for (anchor of anchorList) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
};




// Build menu 

// Scroll to section on link click

// Set sections as active


