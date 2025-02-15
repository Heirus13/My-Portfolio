    document.getElementById('back-to-top').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });

    // Optional: Show/hide the button based on scroll position
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex'; // Show button
        } else {
            backToTopButton.style.display = 'none'; // Hide button
        }
    });
