function selectAllCheckbox() {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const checkbox = event.target;

      if (checkbox.hasAttribute('data-select-all') && checkbox.checked) {
        const menu = checkbox.closest('[data-select-all-menu]');

        if (menu) {
          const checkboxes = menu.querySelectorAll('[data-dd-checkbox]');

          checkboxes.forEach((cb) => {
            cb.checked = true;
          });
        }
      }
    });
  });
}

export default selectAllCheckbox;
