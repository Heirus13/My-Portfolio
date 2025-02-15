document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const body = document.body;
    const chatbotIcon = document.querySelector(".chatbot-icon");
    const backToTop = document.querySelector(".back-to-top");
    const navLinks = document.querySelectorAll("#menu a");

    function toggleMenu(event) {
        event.preventDefault(); // Prevent default action
        const isActive = menu.classList.toggle("active");
        hamburger.classList.toggle("active");

        if (isActive) {
            body.classList.add("no-scroll"); // Disable scrolling
            if (chatbotIcon) chatbotIcon.style.display = "none"; // Hide chatbot
            if (backToTop) backToTop.style.display = "none"; // Hide back-to-top button
        } else {
            closeMenu();
        }
    }

    function closeMenu() {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
        body.classList.remove("no-scroll");
        if (chatbotIcon) chatbotIcon.style.display = "block"; // Restore chatbot icon if needed
    }

    // Click on hamburger to open/close menu
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }

    // Click on nav links to close menu and scroll to sections
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior
            const targetId = this.getAttribute("href").substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                closeMenu(); // Instantly close menu

                // Smoothly scroll to the section
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust if navbar is fixed
                    behavior: "smooth"
                });
            }
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            closeMenu();
        }
    });

    // Close menu when pressing the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Prevent menu toggle when clicking buttons in various sections
    const preventMenuToggle = (buttons) => {
        buttons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevent event from bubbling up to the document
            });
        });
    };

    // Apply to buttons in each section
    preventMenuToggle(document.querySelectorAll("#about-content .btn"));
    preventMenuToggle(document.querySelectorAll(".tech-tools-button"));
    preventMenuToggle(document.querySelectorAll(".project-button"));
    preventMenuToggle(document.querySelectorAll(".service-button"));

    // Prevent menu toggle when clicking the "Download CV" button
    const downloadCVButton = document.querySelector(".cta-button");
    if (downloadCVButton) {
        downloadCVButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
    }

    // Prevent menu toggle when clicking the chatbot icon
    if (chatbotIcon) {
        chatbotIcon.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
    }

    // Prevent menu toggle when clicking the back-to-top button
    if (backToTop) {
        backToTop.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
    }

    // Prevent menu toggle when clicking on any text or container
    const allContainers = document.querySelectorAll(".about, .skills-section, .projects-section, .services, #home");
    allContainers.forEach(container => {
        container.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
    });
});