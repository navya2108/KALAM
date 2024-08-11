document.addEventListener("DOMContentLoaded", () => {
    const aboutItems = document.querySelectorAll(".about-item");
    const sections = document.querySelectorAll("section");

    // Enhanced hover effect with toggle
    aboutItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.classList.toggle("hover", true);
        });

        item.addEventListener("mouseout", () => {
            item.classList.toggle("hover", false);
        });
    });

    // Scroll animations for sections with Intersection Observer
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Fallback for older browsers that don't support Intersection Observer
    if ('IntersectionObserver' in window) {
        sections.forEach(section => {
            observer.observe(section);
        });
    } else {
        // Fallback: Immediately show all sections
        sections.forEach(section => {
            section.classList.add("fade-in");
        });
    }
});
