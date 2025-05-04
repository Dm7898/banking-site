"use strict";
const sections = document.querySelectorAll(
  ".hero, .intro-section, .advantages-section, .locations-section, .testimonials-section"
);

const animationClasses = {
  hero: "fade-in",
  "intro-section": "slide-in-up",
  "advantages-section": "slide-in-left",
  "locations-section": "slide-in-up",
  "testimonials-section": "scale-up",
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const className = target.classList[0];
        const animationClass = animationClasses[className];

        // Apply animation class to section
        target.classList.add(animationClass);

        // Animate child elements
        if (className === "advantages-section") {
          const advantages = target.querySelectorAll(".advantage");
          advantages.forEach((advantage) => {
            advantage.classList.add("slide-in-up");
          });
        }

        if (className === "testimonials-section") {
          const testimonials = target.querySelectorAll(".testimonial");
          testimonials.forEach((testimonial) => {
            testimonial.classList.add("scale-up");
          });
        }

        // Stop observing after animation
        observer.unobserve(target);
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: "0px 0px -30px 0px",
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
