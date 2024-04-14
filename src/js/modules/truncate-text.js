function truncateText() {
  let elements = document.querySelectorAll('[data-tag]');

  if (elements) {
    elements.forEach((element) => {
      let text = element.textContent.trim();
      if (text.length > 4) {
        element.textContent = text.slice(0, 4) + '...';
      }
    });
  }
}

export default truncateText;
