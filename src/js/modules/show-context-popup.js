function showContextPopups() {
  const showContextPopups = document.querySelector('#edit');
  const contextPopup = document.querySelector('#context-popup');
  const closeContextPopup = document.querySelector('#context-popup-cancel');
  const submitContextPopup = document.querySelector('#context-popup-submit');

  if (contextPopup) {
    showContextPopups.addEventListener('click', function () {
      contextPopup.classList.remove('hidden');
    });

    closeContextPopup.addEventListener('click', function () {
      contextPopup.classList.add('hidden');
    });

    submitContextPopup.addEventListener('click', function () {
      contextPopup.classList.add('hidden');
    });
  }
}

export default showContextPopups;
