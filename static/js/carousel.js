document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-arrow").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const carousel = document.getElementById(targetId);

      if (!carousel) {
        console.error("Carousel not found:", targetId);
        return;
      }

      const direction = button.classList.contains("carousel-right") ? 1 : -1;

      carousel.scrollBy({
        left: direction * 440,
        behavior: "smooth"
      });
    });
  });
});