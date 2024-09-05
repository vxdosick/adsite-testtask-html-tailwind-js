const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 64,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 64,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 64,
    }
  }
});
