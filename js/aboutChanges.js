function showAboutMe() {
    document.getElementById('about-me-content').style.display = 'block';
    document.getElementById('education-content').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none'; // Hide contact section
}

function showEducation() {
    document.getElementById('education-content').style.display = 'block';
    document.getElementById('about-me-content').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none'; // Hide contact section
}

function showContact() {
    document.getElementById('contact-content').style.display = 'block';
    document.getElementById('about-me-content').style.display = 'none'; // Hide about section
    document.getElementById('education-content').style.display = 'none'; // Hide education section
}