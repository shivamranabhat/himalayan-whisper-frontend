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
    $(".destination-slider").owlCarousel({
        items: 3,
        margin:30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: false,
        responsive: {
            // For large screens (desktop)
            1200: {
                items: 3, // 3 items on large screens
            },
            // For medium screens (tablets)
            768: {
                items: 2, // 2 items on medium screens
            },
            // For small screens (mobile)
            0: {
                items: 1, // 1 item on small screens
            }
        }
    });
    const carousel = $(".destination-slider");
    $("#slidePrev").click(function () {
        carousel.trigger("prev.owl.carousel"); // Move to previous slide
    });

    $("#slideNext").click(function () {
        carousel.trigger("next.owl.carousel"); // Move to next slide
    });
});