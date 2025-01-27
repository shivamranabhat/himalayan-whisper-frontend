$(document).ready(function () {
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
            480: {
                items: 1.2, // 1 and 20% items on medium screens
            },
            // For small screens (mobile)
            0: {
                items: 1, // 1 item on small screens
            }
        }
    });
    $(".trek-slider").owlCarousel({
        items: 4,
        margin:30,
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        responsive: {
            // For large screens (desktop)
            1200: {
                items: 4, // 3 items on large screens
            },
            // For medium screens (tablets)
            768: {
                items: 3, // 2 items on medium screens
            },
            500: {
                items: 2, // 2 items on medium screens
            },
            // For small screens (mobile)
            0: {
                items: 1.3, // 1 and 30% item on small screens
            }
        }
    });
    $(".adventure-slider").owlCarousel({
        items: 4,
        margin:30,
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        responsive: {
            // For large screens (desktop)
            1200: {
                items: 4, // 4 items on large screens
            },
            // For medium screens (tablets)
            768: {
                items: 3, // 2 items on medium screens
            },
            500: {
                items: 2, // 2 items on medium screens
            },
            // For small screens (mobile)
            0: {
                items: 1.3, // 1 and 30% item on small screens
            }
        }
    });
    $(".car-slider").owlCarousel({
        items: 3,
        margin:30,
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        responsive: {
            // For large screens (desktop)
            1200: {
                items: 3, // 3 items on large screens
            },
            // For medium screens (tablets)
            768: {
                items: 2,
            },
            // For small screens (mobile)
            0: {
                items: 1.2, // 1 and 20% item on small screens
                
            }
        }
    });
    const destinationSlider = $(".destination-slider");
    const trekSlider = $(".trek-slider");
    const advSlider = $(".adventure-slider");
    const carSlider = $(".car-slider");
    $("#slidePrev").click(function () {
        destinationSlider.trigger("prev.owl.carousel"); // Move to previous slide
    });

    $("#slideNext").click(function () {
        destinationSlider.trigger("next.owl.carousel"); // Move to next slide
    });
    $("#slideNextTrek").click(function () {
        trekSlider.trigger("next.owl.carousel"); // Move to next slide
    });
    $("#slideNextAdv").click(function () {
        advSlider.trigger("next.owl.carousel"); // Move to next slide
    });
    $("#slideNextCar").click(function () {
        carSlider.trigger("next.owl.carousel"); // Move to next slide
    });
});