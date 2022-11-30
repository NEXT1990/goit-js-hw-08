import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[type="email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
};

console.log(refs.form);
console.log(refs.inputEmail);
console.log(refs.inputMessage);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData }));
});

onLocalStorageGetMessage();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onLocalStorageGetMessage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
  }
}
