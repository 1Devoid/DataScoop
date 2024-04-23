function handleMobileLinkClick() {
  document.addEventListener('click', (event) => {
    if (event.target.matches('[data-mobile-link]')) {
      let burgerClose = document.getElementById('burger-close');
      if (burgerClose) {
        burgerClose.dispatchEvent(new Event('click'));
      }
    }
  });
}

export default handleMobileLinkClick;
