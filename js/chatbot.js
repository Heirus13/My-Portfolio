 // Toggle chatbot visibility
 document.getElementById('chatbot-icon').addEventListener('click', function() {
    const iframe = document.getElementById('chatbot-iframe');
    if (iframe.style.display === 'none' || iframe.style.display === '') {
        iframe.style.display = 'block'; // Show the chatbot
    } else {
        iframe.style.display = 'none'; // Hide the chatbot
    }
});