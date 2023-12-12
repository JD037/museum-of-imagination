// Enables horizontal scrolling with the mouse wheel
document.querySelector(".side-scroll").addEventListener("wheel", function(e) {
    if (e.deltaY) {
      e.preventDefault();
      this.scrollLeft += e.deltaY + e.deltaX;
    }
  }, { passive: false });

  document.addEventListener('DOMContentLoaded', (event) => {
  // Enables horizontal scrolling with the mouse wheel
  const sideScroll = document.querySelector(".side-scroll");
  sideScroll.addEventListener("wheel", function(e) {
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
      if (sideScroll.scrollLeft >= sections[i].offsetLeft && sideScroll.scrollLeft < sections[i].offsetLeft + sections[i].offsetWidth) {
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
  
  // You should also call this function on window resize to ensure the navbar collapses/expands appropriately
  window.addEventListener('resize', toggleNavbarCollapse);
  
  // Call the function initially to set the correct navbar state
  toggleNavbarCollapse();
  

  // Event listener for scrolling to toggle navbar state
  sideScroll.addEventListener('scroll', toggleNavbarCollapse);

  // Expand the navbar when the current section in the collapsed navbar is clicked
  document.getElementById('navbar').addEventListener('click', function(event) {
    // Check if the navbar is collapsed
    if (this.classList.contains('collapsed')) {
      // If yes, remove the collapsed class to expand it
      this.classList.remove('collapsed');
    }
  });
});


