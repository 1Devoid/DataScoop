// For changing logic of select fields, we need just change type of input radio or checkbox

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

function checkRadio() {
  const radios = document.querySelectorAll(
    'input[type="radio"][data-dd-checkbox]'
  );

  if (radios) {
    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const parentItem = radio.closest('[data-dd-item]');
        const icon = parentItem.querySelector('[data-dd-icon]');
        if (radio.checked && parentItem) {
          parentItem.classList.add('bg-[#F3F2FF]');
          if (icon) {
            icon.classList.remove('hidden');
          }
        } else {
          parentItem.classList.remove('bg-[#F3F2FF]');
          if (icon) {
            icon.classList.add('hidden');
          }
        }

        // Зняти відмітку з інших радіо-батонів з тим самим ім'ям
        const otherRadios = document.querySelectorAll(
          `input[type="radio"][name="${radio.name}"]:not(#${radio.id})`
        );
        otherRadios.forEach((otherRadio) => {
          const otherParentItem = otherRadio.closest('[data-dd-item]');
          const otherIcon = otherParentItem.querySelector('[data-dd-icon]');
          otherParentItem.classList.remove('bg-[#F3F2FF]');
          if (otherIcon) {
            otherIcon.classList.add('hidden');
          }
        });
      });
    });
  }
}

export { checkCheckbox, checkRadio };
