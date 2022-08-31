import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default';

const photoswipeArea = document.querySelectorAll('[data-photoswipe]');
const pswpElement = document.querySelectorAll('.pswp')[0];

function mapToArr(obj) {
  return Object.keys(obj).map(id => obj[id]);
}

if (photoswipeArea.length > 0 && photoswipeArea) {
  for (let i = 0; i < photoswipeArea.length; i += 1) {
    const photosMap = photoswipeArea[i].querySelectorAll('[data-image]');
    const items = {};
    const options = {
      history: false,
      focus: false,
      showAnimationDuration: 0,
    };

    for (let j = 0; j < photosMap.length; j += 1) {
      const size = photosMap[j].dataset.size.split('x');

      items[j] = {
        src: photosMap[j].dataset.image,
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };

      photosMap[j].addEventListener('click', () => {
        const photosList = mapToArr(items);
        const gallery = new PhotoSwipe(
          pswpElement,
          PhotoSwipeUI,
          photosList,
          options,
        );
        gallery.init();
        gallery.goTo(j);
      });
    }
  }
}
