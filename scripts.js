// JavaScript for toggling the navbar
document.getElementById("hamburger").addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});

window.onload = window.onresize = function() {
    const landscapeImg = document.getElementById("image-1");
    const portraitImg = document.getElementById("image-2");

    // Get the height of the landscape image
    const landscapeHeight = landscapeImg.clientHeight;

    // Set the portrait image height to match the landscape image
    portraitImg.style.height = landscapeHeight + "px";
    portraitImg.style.objectFit = "contain"; // Ensure proper scaling
};