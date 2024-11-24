const emailInput = document.getElementById('emailInput');

emailInput.addEventListener('input', () => {
  const value = emailInput.value;
  if (value.includes('@')) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
  } else {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
  }
});
