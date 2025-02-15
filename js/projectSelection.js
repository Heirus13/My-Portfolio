document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); 
        const filter = this.getAttribute('data-filter'); 

        this.classList.add('active');
        
        setTimeout(() => {
            this.classList.remove('active');
        }, 150); 

        // Hide all cards first
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.classList.remove('show'); // Remove the show class to hide cards
            card.style.display = 'none'; // Hide all cards
        });

        // Show filtered cards with animation
        setTimeout(() => {
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block'; // Show the card
                    setTimeout(() => {
                        card.classList.add('show'); // Add the show class for animation
                    }, 10); // Slight delay to allow display to take effect
                }
            });
        }, 150); // Delay before showing filtered cards
    });
});

// Trigger initial fade-in for all cards
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('show'); // Add show class for initial visibility
});