function toggleBurgerMenu() {
  const burgerBtn = document.getElementById('burger');
  const burgerBtnClose = document.getElementById('burger-close');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      document.getElementById('burger-menu').classList.toggle('hidden');
      burgerBtn.classList.toggle('hidden');
      burgerBtnClose.classList.toggle('hidden');
    });

    burgerBtnClose.addEventListener('click', () => {
      document.getElementById('burger-menu').classList.toggle('hidden');
      burgerBtnClose.classList.toggle('hidden');
      burgerBtn.classList.toggle('hidden');
    });
  }
}

export default toggleBurgerMenu;
