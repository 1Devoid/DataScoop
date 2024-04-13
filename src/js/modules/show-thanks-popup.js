function showThanksPopup() {
  const showThanksPopup = document.querySelector('#contact-us-submit');
  const thanksPopup = document.querySelector('#thanks-popup');
  const closeThanksPopup = document.querySelector('#close-thanks-popup');
  const thanksCancel = document.querySelector('#thanks-cancel');

  if (thanksPopup) {
    showThanksPopup.addEventListener('click', function () {
      thanksPopup.classList.remove('hidden');
    });

    closeThanksPopup.addEventListener('click', function () {
      thanksPopup.classList.add('hidden');
    });

    thanksCancel.addEventListener('click', function () {
      thanksPopup.classList.add('hidden');
    });
  }
}

export default showThanksPopup;
