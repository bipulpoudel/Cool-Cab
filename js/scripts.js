$(document).ready(function () {
    $('#hero-area-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        // autoplay: true,
        responsive: {
            0: {
                dots: false,
            },
            767: {
                dots: false,
            },
            768: {
                dots: true,
            },
        },
    });

    $('#testimonial-carousel-1').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i><span>Previous</span>',
            '<span>Next</span><i class="fa fa-angle-right"></i>',
        ],
        responsive: {
            768: {
                navText: [
                    '<i class="fa fa-angle-left"></i><span>Previous</span>',
                    '<span>Next</span><i class="fa fa-angle-right"></i>',
                ],
            },
            575: {
                navText: [
                    '<i class="fa fa-angle-left"></i><span></span>',
                    '<span></span><i class="fa fa-angle-right"></i>',
                ],
            },
            0: {
                navText: false,
            },
        },
    });

    $('#testimonial-carousel-2').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i><span>Previous</span>',
            '<span>Next</span><i class="fa fa-angle-right"></i>',
        ],
        responsive: {
            768: {
                navText: [
                    '<i class="fa fa-angle-left"></i><span>Previous</span>',
                    '<span>Next</span><i class="fa fa-angle-right"></i>',
                ],
            },
            575: {
                navText: [
                    '<i class="fa fa-angle-left"></i><span></span>',
                    '<span></span><i class="fa fa-angle-right"></i>',
                ],
            },
            0: {
                navText: false,
            },
        },
    });

    $('#driver-carousel').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        margin: 15,
        navText: [
            '<i class="fa fa-angle-left"></i><span>Previous</span>',
            '<span>Next</span><i class="fa fa-angle-right"></i>',
        ],
        responsive: {
            1200: {
                items: 4,
            },
            992: {
                items: 3,
                navText: false,
            },
            768: {
                items: 2,
                navText: false,
            },
            0: {
                navText: false,
                items: 1,
            },
        },
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    $('.counter-number').counterUp({
        delay: 10,
        time: 1000,
    });

    $(window).trigger('resize');
});
