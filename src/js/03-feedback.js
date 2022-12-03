import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[type="email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
};

savedMessage();

console.log(refs.form);
console.log(refs.inputMessage);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData }));
  }, 500)
);

function onFormSubmit(event) {
  event.preventDefault();
  JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function savedMessage() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveMessage) {
    refs.inputMessage.value = saveMessage.formData.message;
    refs.inputEmail.value = saveMessage.formData.email;
    console.log(saveMessage.formData.message);
  }
}
