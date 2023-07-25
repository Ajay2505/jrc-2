var swiper1 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});


document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.querySelector(".loading_screen");
  setTimeout(function () {
    loadingScreen.classList.add("loaded");
  }, 3000); 
});
