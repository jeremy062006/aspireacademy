document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger");
  const navLinks = document.querySelector("#nav-links");
  const closeMenu = document.querySelector("#close-menu");
  const heroSection = document.querySelector(".hero");

  // Show menu and hide hero content when hamburger is clicked
  hamburger.addEventListener("click", () => {
    navLinks.classList.add("active");
    heroSection.style.visibility = "hidden"; // Hide hero content
  });

  // Hide menu and show hero content when close button (X) is clicked
  closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
    heroSection.style.visibility = "visible"; // Show hero content
  });
});
