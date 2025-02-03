document.addEventListener('DOMContentLoaded', () => {
  let matchMedia = window.matchMedia('(max-width: 768px)');

  let newswiper;

  const sliderInit = () => {
    if (matchMedia.matches) {
      newswiper = new Swiper('.info-slider', {
        spaceBetween: 20,
        initialSlide: 1,
        loop: true,
        slidesPerView: 2.1,
        pagination: {
          el: '.info-pagination',
          clickable: true
        }
      });
    } else {
      if (newswiper !== undefined) {
        newswiper.destroy();
      }
    }
  };

  sliderInit();

  window.addEventListener('resize', () => {
    sliderInit();
  });
});
