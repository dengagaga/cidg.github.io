var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-nexts",
      prevEl: ".swiper-button-prevs",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      310: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1240: {
          slidesPerView: 3,
      },
  },
  });
var swipers = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 14,
  breakpoints: {
    310: {
        slidesPerView: 1.4,
    },
    640: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1240: {
        slidesPerView: 3.1,
    },
},
  });