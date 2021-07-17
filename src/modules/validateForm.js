'use strict';

const validateForm = () => {
  const formCallback = document.querySelector('form[name = form-callback]');
  const inputName = formCallback.querySelector('input[name = fio]');
  const inputPhone = formCallback.querySelector('input[name = tel]');
  const errorName = formCallback.querySelector('.error-fio');
  const errorPhone = formCallback.querySelector('.error-tel');

  const regName = /[А-Яа-яЁё]+/;
  const regPhone = /\+?[78]\d{10}/;

  inputName.addEventListener('blur', () => {

    if (!regName.test(inputName.value) || inputName.value === '') {
      inputName.style.cssText = `border: solid red; margin-bottom: 0`;
      errorName.textContent = 'Недопустимые символы';
      inputName.value = '';
    } else {
      inputName.value = inputName.value.match(regName);
      inputName.value = inputName.value.trim();
      inputName.value = inputName.value.replace(/( |^)[а-яё]/g, (item) => item.toUpperCase());
      inputName.style.cssText = `border: 2px solid #E3E3E4; margin-bottom: 20px`;
      errorName.textContent = '';
    }
  });

  inputPhone.addEventListener('blur', () => {

    if (!regPhone.test(inputPhone.value)) {
      inputPhone.style.cssText = `border: solid red; margin-bottom: 0`;
      errorPhone.textContent = 'Недопустимые символы';
      inputPhone.value = '';
    } else {
      inputPhone.value = inputPhone.value.match(regPhone);
      inputPhone.style.cssText = `border: 2px solid #E3E3E4; margin-bottom: 20px`;
      errorPhone.textContent = '';
    }
  });

};

export default validateForm;