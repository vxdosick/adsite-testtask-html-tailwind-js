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
