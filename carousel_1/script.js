const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots > *");
const duration = 5000;

// slide timer
let timer = setTimeout(onSlideTimer, duration);

// add event handler to dot
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", onDotClick);
}

// changing slides via timer
function onSlideTimer() {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
      // adjust the classes for the next slide and the corresponding dot selector
      const position = (i + 1) % slides.length;
      slides[position].classList.add("active");
      dots[position].classList.add("active");
      break;
    }
  }

  timer = setTimeout(onSlideTimer, duration);
}

// changing slides via click
function onDotClick(e) {
  // making all slides and dots inactive
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }
  // finding and making the one dot and corresponding slide active
  for (let i = 0; i < dots.length; i++) {
    if (e.target === dots[i]) {
      const position = i % slides.length;
      slides[position].classList.add("active");
      dots[position].classList.add("active");
      break;
    }
  }
  // resetting the timer
  clearTimeout(timer);
  timer = setTimeout(onSlideTimer, duration);
}
