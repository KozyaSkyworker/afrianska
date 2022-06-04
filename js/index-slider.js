$(document).ready(function () {
    $('.projects__content-slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1

                }
            }
        ]
    });
});