function rotateArrowInput() {
  const dropdownButtons = document.querySelectorAll('[data-rotate]');

  if (dropdownButtons) {
    dropdownButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.querySelector('[data-rotate]  svg').classList.toggle('rotate-180');
      });
    });
  }
}

export default rotateArrowInput;
