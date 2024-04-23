function setupSwipe() {
  const carousel = document.querySelector('#carouselExampleCrossfade');

  if (carousel) {
    let startX, endX;

    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
    });
  }
}

export default setupSwipe;
