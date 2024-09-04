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
  });