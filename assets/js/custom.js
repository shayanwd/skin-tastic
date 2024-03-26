var swiper = new Swiper(".featured-slide", {
    spaceBetween: 10,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".feature-next",
        prevEl: ".feature-prev",
    },

    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 4,
        },
        3000: {
            slidesPerView: 4,
        },
    },

});