function showPassword(inputSelector, btnSelector) {
  const passwordInput = document.querySelector(inputSelector);

  if (passwordInput) {
    const showPasswordButton = document.querySelector(btnSelector);
    const showIcon = showPasswordButton.querySelector('.show-password');
    const hideIcon = showPasswordButton.querySelector('.hide-password');

    showPasswordButton.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showIcon.classList.add('hidden');
        hideIcon.classList.remove('hidden');
      } else {
        passwordInput.type = 'password';
        showIcon.classList.remove('hidden');
        hideIcon.classList.add('hidden');
      }
    });
  }
}

export default showPassword;
