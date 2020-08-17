var swiper = new Swiper('.swiper-container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});

var swiper2 = new Swiper('.swiper-container-marcas', {
  cssMode: true,
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-m',
    prevEl: '.swiper-button-prev-m',
  },
  mousewheel: true,
});