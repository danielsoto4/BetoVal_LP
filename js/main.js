// Slider principal (Cubo)
const cubeSwiper = new Swiper('.swiper-cube', {
  effect: 'cube',
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  slidesPerGroup: 1, 
  navigation: { 
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 2700,
});

// Slider con efecto manipulation
const manipulationSwiper = new Swiper('.swiper-manipulation', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 300,
  grabCursor: true,
  speed: 2700,

});

// Slider de texto
const textSwiper = new Swiper('.swiper-text', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 50,
  grabCursor: true,
  speed: 2700,
});


// Botones de navegación global
document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  manipulationSwiper.slidePrev();
  textSwiper.slidePrev();
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  manipulationSwiper.slideNext();
  textSwiper.slideNext();
});
