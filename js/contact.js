document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            toastr.success('Your message has been sent successfully!', 'Success');
            this.reset(); // Clear the form
        } else {
            toastr.error('Error sending message: ' + result.error, 'Error');
        }
    })
    .catch(error => {
        toastr.error('Unexpected error: ' + error, 'Error');
    });
});