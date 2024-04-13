function checkCheckbox() {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][data-dd-checkbox]'
  );

  if (checkboxes) {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const parentItem = checkbox.closest('[data-dd-item]');
        if (checkbox.checked && parentItem) {
          parentItem.classList.add('bg-[#F3F2FF]');
          const icon = parentItem.querySelector('[data-dd-icon]');
          if (icon) {
            icon.classList.remove('hidden');
          }
        } else {
          parentItem.classList.remove('bg-[#F3F2FF]');
          const icon = parentItem.querySelector('[data-dd-icon]');
          if (icon) {
            icon.classList.add('hidden');
          }
        }
      });
    });
  }
}

export default checkCheckbox;
