// slider developer : @SerGioPlay
// developer website: https://sergioplay01.github.io/portfolio_sergio_play/
// slider version : 1.1

var sliderContainers = document.getElementsByClassName("slider-container");

for (var i = 0; i < sliderContainers.length; i++) {
  setupSlider(sliderContainers[i]);
}

function setupSlider(sliderContainer) {
  var sliders = sliderContainer.querySelectorAll(".slider");
  var currentSlide = 0;

  function showSlide(n) {
    if (n >= sliders.length) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = sliders.length - 1;
    }

    for (var i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove("active");
    }

    sliders[currentSlide].classList.add("active");
  }

  function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
  }

  function previousSlide() {
    currentSlide--;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  var prevButton = sliderContainer.querySelector(".prev-btn");
  var nextButton = sliderContainer.querySelector(".next-btn");

  prevButton.addEventListener("click", previousSlide);
  nextButton.addEventListener("click", nextSlide);


  setInterval(nextSlide, none);
}