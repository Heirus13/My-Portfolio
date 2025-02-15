document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

    function checkFadeIn() {
        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            // Adjust the threshold for when elements should appear/disappear
            if (position < screenHeight - 200 && position > 0) { 
                element.classList.add("show"); // Show when scrolling down
            } else {
                element.classList.remove("show"); // Slide back when scrolling up or out of view
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn(); // Run on page load
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".skill-item");

    function checkFadeIn() {
        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            // Adjust the threshold for when elements should appear/disappear
            if (position < screenHeight - 150 && position > 0) { 
                element.classList.add("show"); // Show when scrolling down
            } else {
                element.classList.remove("show"); // Slide back when scrolling up or out of view
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn(); // Run on page load
});