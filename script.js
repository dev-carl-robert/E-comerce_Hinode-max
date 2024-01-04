
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".catalogo", {
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: true,
  fade: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  keyboard: true,
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressContent.textContent = `${Math.ceil(time / 1200)}s`;
    },

  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 3,
    },
  },
});