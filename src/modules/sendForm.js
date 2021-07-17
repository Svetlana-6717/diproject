'use strict';

const sendForm = () => {
  const formCallback = document.querySelector('form[name = form-callback]');
  const input = formCallback.querySelectorAll('.form-control');
  const statusMessage = formCallback.querySelector('.message');

  const errorMessage = 'Ошибка ...';
  const loadMessage = 'Идет отправка ...';
  const successMessage = 'Отправлено!';

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headrs: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };

  formCallback.addEventListener('submit', (event) => {
    event.preventDefault();

    statusMessage.textContent = loadMessage;
    const formData = new FormData(formCallback);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;
      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
      });

    input.forEach((elem) => {
      if (event.target) {
        elem.value = '';
      }
    });

  });
};

export default sendForm;