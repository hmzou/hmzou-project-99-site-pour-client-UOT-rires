document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slides img");
  let currentSlide = 0;

  // Afficher la première image au chargement
  slides[currentSlide].classList.add("active");

  // Bouton suivant
  document.querySelector(".next").addEventListener("click", function() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  });

  // Bouton précédent
  document.querySelector(".prev").addEventListener("click", function() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slides1 img");
  let currentSlide = 0;

  // Afficher la première image au chargement
  slides[currentSlide].classList.add("active");

  // Bouton suivant
  document.querySelector(".next1").addEventListener("click", function() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  });

  // Bouton précédent
  document.querySelector(".prev1").addEventListener("click", function() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  });
});