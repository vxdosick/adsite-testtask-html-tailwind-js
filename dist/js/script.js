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

const footerLastSect = document.querySelectorAll(".footer__opensect");

footerLastSect.forEach(section => {
  const buttonUnderline = section.querySelector(".button__underline");
  const paragraph = section.querySelector("p");

  buttonUnderline.addEventListener("click", () => {
    if (paragraph.classList.contains("line-clamp-3")) {
      paragraph.classList.remove("line-clamp-3");
      buttonUnderline.textContent = "Zamknij \u2191";
    } else {
      paragraph.classList.add("line-clamp-3");
      buttonUnderline.textContent = "Rozwiń \u2193";
    }
  });
});
