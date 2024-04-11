function showVideoPopup() {
  const showVideoPopups = document.querySelectorAll('.show-video-popup');
  const videoPopup = document.querySelector('#video-popup');
  const closeVideoPopup = document.querySelector('#close-video-popup');

  if (videoPopup && closeVideoPopup) {
    showVideoPopups.forEach(function (showVideoPopup) {
      showVideoPopup.addEventListener('click', function () {
        videoPopup.classList.remove('hidden');
      });
    });

    closeVideoPopup.addEventListener('click', function () {
      videoPopup.classList.add('hidden');
    });
  }
}

export default showVideoPopup;
