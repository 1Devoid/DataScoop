function secureNums() {
  const secureNumInputs = document.querySelectorAll('.secure-num');

  if (secureNumInputs) {
    secureNumInputs.forEach((input) => {
      input.addEventListener('input', () => {
        const maxLength = 1; // Припустимо, що ви хочете обмежити до 5 цифр
        if (input.value.length > maxLength) {
          input.value = input.value.slice(0, maxLength);
        }
      });
    });
  }
}

export default secureNums;
