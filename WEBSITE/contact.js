document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("successMessage").innerText =
        "Thank you! Your message has been sent successfully 🌷";

    document.getElementById("contactForm").reset();
});