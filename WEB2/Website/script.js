// Explore Button Scroll

document.getElementById("exploreBtn").addEventListener("click", () => {

  document.getElementById("books").scrollIntoView({
    behavior: "smooth"
  });

});


// Buy Button Alert

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Book added to cart!");

  });

});


// Contact Form

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Message Sent Successfully!");

  contactForm.reset();

});
// SELECT ELEMENTS
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

// SHOW SLIDE
function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

// NEXT SLIDE
function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// PREVIOUS SLIDE
function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

// BUTTON EVENTS
nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

// AUTO SLIDE
setInterval(nextSlide, 5000);