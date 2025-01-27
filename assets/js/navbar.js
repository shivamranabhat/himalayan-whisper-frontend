$(document).ready(function () {
    const navbar = $(".navbar");

    // Scroll event listener
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            navbar.addClass("fixed"); // Add 'fixed' class when scrolling
        } else {
            navbar.removeClass("fixed"); // Remove 'fixed' class when at the top
        }
    });
});