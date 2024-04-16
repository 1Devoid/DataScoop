function showSharePopup() {
  const showSharePopups = document.querySelector('#share-btn');
  const sharePopup = document.querySelector('#share-popup');
  const closeSharePopup = document.querySelector('#close-share-popup');
  const submitSharePopup = document.querySelector('#share-popup-submit');

  if (sharePopup) {
    showSharePopups.addEventListener('click', function () {
      sharePopup.classList.remove('hidden');
    });

    closeSharePopup.addEventListener('click', function () {
      sharePopup.classList.add('hidden');
    });

    submitSharePopup.addEventListener('click', function () {
      sharePopup.classList.add('hidden');
    });
  }
}

export default showSharePopup;
