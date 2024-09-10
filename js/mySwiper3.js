var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-nexts",
        prevEl: ".swiper-button-prevs",
      },
      pagination: {
        el: ".swiper-pagination2",
      },
      breakpoints: {
        310: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1240: {
            slidesPerView: 4,
        },
    },
    });