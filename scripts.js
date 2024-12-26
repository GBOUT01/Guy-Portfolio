// JavaScript for toggling the navbar
document.getElementById("hamburger").addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});
