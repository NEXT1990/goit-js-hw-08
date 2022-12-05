import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[type="email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
};

onInputs();

console.log(refs.form);
console.log(refs.inputMessage);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onLocalStorage, 500));

function onLocalStorage(event) {
  let savedDataLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedDataLocalStorage) {
    console.log(savedDataLocalStorage);
  }
  const { email, message } = event.currentTarget.elements;
  savedDataLocalStorage = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedDataLocalStorage));
}

function onFormSubmit(event) {
  event.preventDefault();
  JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputs() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData) {
    refs.inputMessage.value = parsedData.message || '';
    refs.inputEmail.value = parsedData.email || '';
    console.log(parsedData);
  }
}
