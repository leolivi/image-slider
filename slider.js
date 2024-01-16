// select container of elements
const sliderContainer = document.querySelector(".slider");
// select the container of image
const imageContainer = document.querySelector(".slide");
// autoplay
const interval = 3000;
let intervalId;

// select two buttons and add event listener
document
  .querySelector(".controls-container .left")
  .addEventListener("click", () => {
    moveLeft();
    // pauseAutoplay();
    // clearInterval();
  });
document
  .querySelector(".controls-container .right")
  .addEventListener("click", () => {
    moveRight();
    // pauseAutoplay();
    // clearInterval();
  });

// select play and pause buttons and add event listener
document
  .querySelector(".controls-container .pause")
  .addEventListener("click", pauseAutoplay);

document
  .querySelector(".controls-container .play")
  .addEventListener("click", startAutoplay);

// function to move the picture
function moveRight() {
  // reset autoplay
  clearInterval(intervalId);
  // take first element and append it
  sliderContainer.append(document.querySelectorAll(".slide")[0]);
  // start autoplay
  startAutoplay();
};

function moveLeft() {
  clearInterval(intervalId);
  // prepend last element
  const arrayLength = document.querySelectorAll(".slide").length;
  const lastSlide = document.querySelectorAll(".slide")[arrayLength - 1];
  sliderContainer.prepend(lastSlide);
  startAutoplay();
}

// function for starting autoplay
function startAutoplay() {
  intervalId = setInterval(() => {
    moveRight();
  }, interval);
  document.querySelector(".pause").style.display = "block";
  document.querySelector(".play").style.display = "none";
};

// function for pausing autoplay
function pauseAutoplay() {
  clearInterval(intervalId);
  document.querySelector(".pause").style.display = "none";
  document.querySelector(".play").style.display = "block";
};

// slideIn and Out
setTimeout(() => {
  imageContainer.classList.remove("slide-in");
  imageContainer.classList.add("slide-out");
}, 3000);

// start autoplay
// startAutoplay();
pauseAutoplay();