// Enables horizontal scrolling with the mouse wheel
document.querySelector(".side-scroll").addEventListener("wheel", function(e) {
  if (e.deltaY) {
    e.preventDefault();
    this.scrollLeft += e.deltaY + e.deltaX;
  }
}, { passive: false });

// Enables next section arrow
document.querySelector('.next-section-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  const sideScroll = document.querySelector(".side-scroll");
  // Assuming each section has the same width
  const sectionWidth = document.querySelector('.section').offsetWidth; 
  // Scroll to the next section
  sideScroll.scrollLeft += sectionWidth;
});

document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  });
});