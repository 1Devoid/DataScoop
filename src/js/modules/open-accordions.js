function openAccordion() {
  const elements = document.querySelectorAll('[data-row-icon-1]');

  elements.forEach((element) => {
    element.addEventListener('click', () => {
      let parentRow1 = element.closest('[data-row-1]');
      if (parentRow1) {
        let nextSibling = parentRow1.nextElementSibling;
        while (nextSibling) {
          if (nextSibling.hasAttribute('data-row-1')) {
            break;
          }
          if (nextSibling.hasAttribute('data-row-2')) {
            nextSibling.classList.toggle('hidden');
          }
          nextSibling = nextSibling.nextElementSibling;
        }
      }

      if (element.classList.contains('rotate-180')) {
        let parentRow1 = element.closest('[data-row-1]');
        if (parentRow1) {
          let nextSibling = parentRow1.nextElementSibling;
          while (nextSibling) {
            if (nextSibling.hasAttribute('data-row-1')) {
              break;
            }
            if (nextSibling.hasAttribute('data-row-2')) {
              nextSibling.classList.add('hidden');
              let icons2 = nextSibling.querySelectorAll('[data-row-icon-2]');
              icons2.forEach((icon2) => {
                icon2.classList.remove('rotate-180');
              });
            }
            if (nextSibling.hasAttribute('data-row-3')) {
              nextSibling.classList.add('hidden');
            }
            nextSibling = nextSibling.nextElementSibling;
          }
        }
      }

      element.classList.toggle('rotate-180');
    });
  });
}

function openAccordion2() {
  const elements = document.querySelectorAll('[data-row-icon-2]');

  elements.forEach((element) => {
    element.addEventListener('click', () => {
      let parentRow1 = element.closest('[data-row-2]');
      if (parentRow1) {
        let nextSibling = parentRow1.nextElementSibling;

        while (nextSibling) {
          if (nextSibling.hasAttribute('data-row-2')) {
            break;
          }
          if (nextSibling.hasAttribute('data-row-3')) {
            nextSibling.classList.toggle('hidden');
          }
          nextSibling = nextSibling.nextElementSibling;
        }

        element.classList.toggle('rotate-180');
      }
    });
  });
}

export { openAccordion, openAccordion2 };
