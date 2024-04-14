function rotateArrowInput() {
  const dropdownButtons = document.querySelectorAll('[data-rotate]');
  const dropdownButtonsArray = Array.from(dropdownButtons);

  if (dropdownButtonsArray) {
    dropdownButtonsArray.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.querySelector('svg').classList.toggle('rotate-180');
      });
    });

    document.addEventListener('click', (event) => {
      const isClickInsideDropdown = dropdownButtonsArray.some((btn) =>
        btn.contains(event.target)
      );
      const dropdownMenus = document.querySelectorAll('[data-dd-menu]');
      const dropdownMenusArray = Array.from(dropdownMenus);
      const isClickInsideDropdownMenu = dropdownMenusArray.some((menu) =>
        menu.contains(event.target)
      );

      if (!isClickInsideDropdown && !isClickInsideDropdownMenu) {
        dropdownButtonsArray.forEach(function (btn) {
          const svg = btn.querySelector('svg');
          if (svg) {
            svg.classList.remove('rotate-180');
          }
        });
      }
    });
  }
}

export default rotateArrowInput;
