'use strict';
const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
function onFormInput(event) {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

const rawData = localStorage.getItem(LS_KEY);
if (rawData) {
  const data = JSON.parse(rawData);
  form.email.value = data.email;
  form.message.value = data.message;
}

form.addEventListener('submit', onButtonSubmit);
function onButtonSubmit(event) {
  event.preventDefault();
  if (form.email.value.trim() === '' || form.message.value.trim() === '') {
    return;
  }
  console.log(JSON.parse(localStorage.getItem(LS_KEY)));
  localStorage.removeItem(LS_KEY);
  form.reset();
}
