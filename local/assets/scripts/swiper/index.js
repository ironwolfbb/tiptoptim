import Swiper from 'swiper/dist/js/swiper.min';

const stagesSliderList = [];
const stagesSlider = document.querySelectorAll('.stages__slider');

if (stagesSlider && stagesSlider.length > 0) {
  for (let i = 0; i < stagesSlider.length; i += 1) {
    stagesSliderList[i] = new Swiper(stagesSlider[i], {
      slidesPerView: 2,
      pagination: {
        el: '.stages__pagination',
        type: 'bullets',
        bulletElement: 'button',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        520: {
          slidesPerView: 1,
        },
      },
    });
  }
}


const tabsList = [];
const tabs = document.querySelectorAll('.tabs');

if (tabs && tabs.length > 0) {
  for (let i = 0; i < tabs.length; i += 1) {
    tabsList[i] = new Swiper(tabs[i], {
      slidesPerView: 'auto',
      followFinger: false,
      breakpoints: {
        768: {
          followFinger: true,
        },
      },
    });
  }
}
