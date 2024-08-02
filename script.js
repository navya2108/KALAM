// JavaScript for any interactive animations
document.addEventListener("DOMContentLoaded", () => {
    const aboutItems = document.querySelectorAll(".about-item");

    aboutItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.classList.add("hover");
        });

        item.addEventListener("mouseout", () => {
            item.classList.remove("hover");
        });
    });
});
