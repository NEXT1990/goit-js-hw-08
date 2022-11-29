import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[type="email"]'),
  inputMassage: document.querySelector('textarea[name="message"]'),
};

console.log(refs.form);
console.log(refs.inputEmail);
console.log(refs.inputMassage);

refs.form.addEventListener('submit', onFormSubmit);
refs.inputEmail.addEventListener('input', onEmailInput);
