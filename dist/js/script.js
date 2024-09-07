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
  const footerOpendecor = paragraph.querySelector(".footer__opendecor");
  buttonUnderline.addEventListener("click", () => {
    if (paragraph.classList.contains("max-h-[42px]")) {
      paragraph.classList.remove("max-h-[42px]");
      paragraph.classList.add("max-h-[500px]");
      paragraph.textContent = paragraph.textContent.replace(" [...]", "")
    } else {
      paragraph.classList.remove("max-h-[500px]");
      paragraph.classList.add("max-h-[42px]");
      if (!paragraph.textContent.includes("[...]")) {
        paragraph.textContent += " [...]";
      }
    }
  })
})




// footerOpendecor.textContent = "[...]
// , footerOpendecor.textContent = ""
