export class CustomSlider {
  constructor(slides, elToPlace) {
    this.slides = slides;
    this.elToPlace = elToPlace;

    render();
  }

  getSlide(content, index) {
    const slide = document.createElement('div');

    slide.className = 'slide';
    slide.textContent = content;

    slide.style.cssText = `
        flex: 0 0 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #${(index * 333 + 222).toString(16)};
        color: white;
        font-size: 24px;
        user-select: none;
  `;

    return slide;
  }

  get templateNode() {
    const sliderContainer = document.createElement('div');

    sliderContainer.style.cssText = `
        display: flex;
        overflow: hidden;
        width: 100%;
        height: 300px;
        position: relative;
    `;

    const sliderWrapper = document.createElement('div');

    sliderWrapper.style.cssText = `
        display: flex;
        transition: transform 0.3s ease;
        will-change: transform;
    `;

    this.slides.forEach((content, index) => {
      sliderWrapper.appendChild(this.getSlide(content, index));
    });

    sliderContainer.appendChild(sliderWrapper);
    return sliderContainer;
  }

  render() {
    const element = document.createElement('div');
    element.appendChild(this.templateNode);
    this.elToPlace.appendChild(element.firstElementChild);
  }
}

// Hammer.js integration
let currentIndex = 0;
const hammer = new Hammer(sliderContainer);
hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

hammer.on('panstart', e => {
  sliderWrapper.style.transition = 'none';
});

hammer.on('panmove', e => {
  const deltaX = e.deltaX;
  const moveX = -currentIndex * sliderContainer.offsetWidth + deltaX;
  sliderWrapper.style.transform = `translateX(${moveX}px)`;
});

hammer.on('panend', e => {
  const threshold = sliderContainer.offsetWidth / 4;
  const deltaX = e.deltaX;

  if (deltaX < -threshold && currentIndex < slides.length - 1) {
    currentIndex++;
  } else if (deltaX > threshold && currentIndex > 0) {
    currentIndex--;
  }

  sliderWrapper.style.transition = 'transform 0.3s ease';
  sliderWrapper.style.transform = `translateX(-${currentIndex * sliderContainer.offsetWidth}px)`;
});
