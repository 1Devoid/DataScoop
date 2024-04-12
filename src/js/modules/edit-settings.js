function editSettings() {
  const editBtns = document.getElementById('edit-btns');

  if (editBtns) {
    const inputs = document.querySelectorAll('input[data-settings]');
    const cancelButton = document.getElementById('settings-cancel');
    const saveButton = document.getElementById('settings-save');

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.value.trim().length > 0) {
          editBtns.classList.remove('opacity-50');
          cancelButton.removeAttribute('disabled');
          saveButton.removeAttribute('disabled');
        } else {
          editBtns.classList.add('opacity-50');
          cancelButton.setAttribute('disabled', 'disabled');
          saveButton.setAttribute('disabled', 'disabled');
        }
      });
    });
  }
}

export default editSettings;
