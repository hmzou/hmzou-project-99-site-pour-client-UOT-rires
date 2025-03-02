document.addEventListener("DOMContentLoaded", function() {
  // Slider functionality for .slides
  const slides = document.querySelectorAll(".slides img");
  let currentSlide = 0;
  if (slides.length > 0) {
    // Display the first image on load
    slides[currentSlide].classList.add("active");

    // Next button
    document.querySelector(".next").addEventListener("click", function() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    });

    // Previous button
    document.querySelector(".prev").addEventListener("click", function() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
    });
  }

  // Slider functionality for .slides1
  const slides1 = document.querySelectorAll(".slides1 img");
  let currentSlide1 = 0;
  if (slides1.length > 0) {
    // Display the first image on load
    slides1[currentSlide1].classList.add("active");

    // Next button
    document.querySelector(".next1").addEventListener("click", function() {
      slides1[currentSlide1].classList.remove("active");
      currentSlide1 = (currentSlide1 + 1) % slides1.length;
      slides1[currentSlide1].classList.add("active");
    });

    // Previous button
    document.querySelector(".prev1").addEventListener("click", function() {
      slides1[currentSlide1].classList.remove("active");
      currentSlide1 = (currentSlide1 - 1 + slides1.length) % slides1.length;
      slides1[currentSlide1].classList.add("active");
    });
  }

  // Translation functionality
  document.getElementById("translate-btn").addEventListener("click", function() {
    // Translation mapping: French to English
    const translations = {
      "Accueil": "Home",
      "À propos": "About",
      "Événements": "Events",
      "Boutique": "Shop",
      "Médias": "Media",
      "Contact & Équipe": "Contact & Team",
      "Faites rire uOttawa, un stand-up à la fois !": "Make uOttawa laugh, one stand-up at a time!",
      "Bienvenue sur le site officiel de uOttawa Laughs, le club de stand-up de l’Université d’Ottawa.":
        "Welcome to the official site of uOttawa Laughs, the University of Ottawa stand-up club.",
      "Prochains événements": "Upcoming Events",
      "Open Mic": "Open Mic",
      "Show Spécial": "Special Show",
      "Atelier d'écriture humoristique": "Comedy Writing Workshop",
      "Date :": "Date:",
      "Lieu :": "Location:",
      "Inscription": "Register",
      "Notre mission et nos valeurs": "Our Mission and Values",
      "uOttawa Laughs vise à promouvoir l’expression humoristique par le stand-up, offrant aux étudiants un espace pour s'exprimer sur scène et créer une communauté passionnée du rire.":
        "uOttawa Laughs aims to promote humor through stand-up comedy, providing students a platform to perform and build a passionate community.",
      "Mission :": "Mission:",
      "Valeurs :": "Values:",
      "Objectifs :": "Goals:",
      "Email de contact :": "Contact Email:",
      "Notre équipe": "Our Team",
      "Président & Planificateur d’événements:": "President & Event Planner:",
      "Vice-Président :": "Vice President:",
      "Trésorier :": "Treasurer:",
      "Tous droits réservés.": "All rights reserved."
    };

    // Update navigation links text
    document.querySelectorAll('nav ul li a').forEach(link => {
      const txt = link.textContent.trim();
      if (translations[txt]) {
        link.textContent = translations[txt];
      }
    });

    // Update headings, paragraphs, and footer text
    document.querySelectorAll('h1, h2, h3, p, footer p').forEach(element => {
      const txt = element.textContent.trim();
      if (translations[txt]) {
        element.textContent = translations[txt];
      }
    });

    // Optionally, update the document's language attribute
    document.documentElement.lang = "en";
  });
});
