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
