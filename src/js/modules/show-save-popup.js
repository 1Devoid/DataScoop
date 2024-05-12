function showSavePopup() {
  const showSavePopup = document.querySelector('#save-btn');
  const savePopup = document.querySelector('#save-popup');
  const closeSavePopup = document.querySelector('#close-save-popup');
  const cancelSavePopup = document.querySelector('#save-popup-cancel');
  const saveSavePopup = document.querySelector('#save-popup-save');

  if (savePopup) {
    showSavePopup.addEventListener('click', function () {
      savePopup.classList.remove('hidden');
    });

    closeSavePopup.addEventListener('click', function () {
      savePopup.classList.add('hidden');
    });

    cancelSavePopup.addEventListener('click', function () {
      savePopup.classList.add('hidden');
    });

    saveSavePopup.addEventListener('click', function () {
      savePopup.classList.add('hidden');
    });
  }
}

export default showSavePopup;
