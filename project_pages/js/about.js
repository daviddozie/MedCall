// Swiper-js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    prevEl: '.next',
  },

  slidesPerView: 1,
  spaceBetween: 10,
});
