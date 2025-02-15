$(document).ready(function () {
    $('#menu-toggle').click(function () {
        $(this).toggleClass('active'); // Toggle the active class for animation
        $('#menu').toggleClass('active'); // Toggle the menu visibility
    });

    // Change navbar color on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {  // You can adjust the scroll offset here
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });
});