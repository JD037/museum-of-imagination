// Enables horizontal scrolling with the mouse wheel
document.querySelector(".side-scroll").addEventListener("wheel", function(e) {
  if (e.deltaY) {
    e.preventDefault();
    this.scrollLeft += e.deltaY + e.deltaX;
  }
}, { passive: false });

// Function to change navbar state based on scroll position
function toggleNavbarCollapse() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('.section');
  
  let currentSection = 'Home'; // Default to the first section

  for (let i = 0; i < sections.length; i++) {
    if (window.scrollX >= sections[i].offsetLeft && window.scrollX < sections[i].offsetLeft + sections[i].offsetWidth) {
      currentSection = sections[i].id; // Update to the current section
      break;
    }
  }

  // Update navbar based on current section and screen width
  if (currentSection !== 'Home' || window.innerWidth <= 840) {
    navbar.classList.add('collapsed');
    navbar.setAttribute('data-current-section', currentSection); // Update the displayed section
  } else {
    navbar.classList.remove('collapsed');
  }
}

// Function to change title visibility based on scroll position
function toggleTitleVisibility() {
  const homeSection = document.getElementById('Home');
  const sideScroll = document.querySelector(".side-scroll");
  const title = document.querySelector('.section-title');
  const description = document.querySelector('.section-description');

  // Check if the left scroll position is within the home section
  const inHomeSection = sideScroll.scrollLeft < homeSection.offsetWidth;

  // Toggle the visibility of the title and description
  if (inHomeSection) {
    title.style.visibility = 'visible';
    description.style.visibility = 'visible';
  } else {
    title.style.visibility = 'hidden';
    description.style.visibility = 'hidden';
  }
}

// Event listener for resizing the window to toggle navbar collapse
window.addEventListener('resize', toggleNavbarCollapse);

// Event listener for scrolling to toggle navbar state and title visibility
document.querySelector(".side-scroll").addEventListener('scroll', () => {
  toggleNavbarCollapse();
  toggleTitleVisibility();
});

// Expand the navbar when the current section in the collapsed navbar is clicked
document.getElementById('navbar').addEventListener('click', function(event) {
  if (this.classList.contains('collapsed')) {
    this.classList.remove('collapsed');
  }
});

// Call the functions initially to set the correct navbar state and title visibility
document.addEventListener('DOMContentLoaded', () => {
  toggleNavbarCollapse();
  toggleTitleVisibility();
});

document.querySelector('.next-section-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  const sideScroll = document.querySelector(".side-scroll");
  // Assuming each section has the same width
  const sectionWidth = document.querySelector('.section').offsetWidth; 
  // Scroll to the next section
  sideScroll.scrollLeft += sectionWidth;
});
