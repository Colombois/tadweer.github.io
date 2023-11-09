let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const autoPlayInterval = 60000; // Adjusted to 6000 milliseconds (6 seconds) for each slide

// Initially set the first slide to active and in view
slides.forEach((slide, index) => {
  slide.style.transform = index === 0 ? "translateX(0)" : "translateX(100%)";
});

function moveSlide(n) {
  window.requestAnimationFrame(function() {
    // Remove active class from the current slide
    slides[slideIndex].classList.remove("active");
    slides[slideIndex].style.transform = "translateX(100%)";
  
    // Update slide index
    slideIndex = (slideIndex + n + slides.length) % slides.length;
  
    // Add active class to the new slide and move it into view
    slides[slideIndex].classList.add("active");
    slides[slideIndex].style.transform = "translateX(0)";
  });
}

// Event listeners for next/prev buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Autoplay functionality
function startAutoPlay() {
  return setInterval(() => {
    moveSlide(1);
  }, autoPlayInterval);
}

let slideInterval = startAutoPlay();

// Optional: Stop the autoplay when user hovers over the slider
document.querySelector('.slider').addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// Optional: Resume autoplay when the user moves the mouse away
document.querySelector('.slider').addEventListener('mouseleave', () => {
  slideInterval = startAutoPlay();
});
