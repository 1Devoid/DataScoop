function showCustomizePopup() {
  const showCustomizePopup = document.querySelector('#customize');
  const customizePopup = document.querySelector('#customize-popup');
  const closeCustomizePopup = document.querySelector('#close-customize-popup');
  const cancelCustomizePopup = document.querySelector(
    '#customize-popup-cancel'
  );
  const submitCustomizePopup = document.querySelector(
    '#customize-popup-submit'
  );

  if (customizePopup) {
    showCustomizePopup.addEventListener('click', function () {
      customizePopup.classList.remove('hidden');
    });

    closeCustomizePopup.addEventListener('click', function () {
      customizePopup.classList.add('hidden');
    });

    cancelCustomizePopup.addEventListener('click', function () {
      customizePopup.classList.add('hidden');
    });

    submitCustomizePopup.addEventListener('click', function () {
      customizePopup.classList.add('hidden');
    });
  }
}

export default showCustomizePopup;
