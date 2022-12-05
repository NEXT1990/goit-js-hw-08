import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[type="email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
};

onLocalStorage();

console.log(refs.form);
console.log(refs.inputMessage);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener(
  'input',
  throttle(event => {
    let savedDataLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedDataLocalStorage);
    if (savedDataLocalStorage) {
      savedDataLocalStorage[event.target.name] = event.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedDataLocalStorage));
    }
  }, 500)
);

function onFormSubmit(event) {
  event.preventDefault();
  JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onLocalStorage() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData || '') {
    refs.inputMessage.value = parsedData.message || '';
    refs.inputEmail.value = parsedData.email || '';
    console.log(parsedData);
  }
}
