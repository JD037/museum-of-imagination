// Enables horizontal scrolling with the mouse wheel
document.querySelector(".side-scroll").addEventListener("wheel", function(e) {
  if (e.deltaY) {
    e.preventDefault();
    this.scrollLeft += e.deltaY + e.deltaX;
  }
}, { passive: false });

document.querySelector('.next-section-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  const sideScroll = document.querySelector(".side-scroll");
  // Assuming each section has the same width
  const sectionWidth = document.querySelector('.section').offsetWidth; 
  // Scroll to the next section
  sideScroll.scrollLeft += sectionWidth;
});
