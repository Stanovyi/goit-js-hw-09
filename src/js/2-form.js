const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.elements.email.value = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey)).email
  : '';

form.elements.message.value = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey)).message
  : '';

form.addEventListener('input', saveToLocal);
form.addEventListener('submit', onClick);

function saveToLocal(e) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: e.currentTarget.elements.email.value.trim(),
      message: e.currentTarget.elements.message.value.trim(),
    })
  );
}

function onClick(e) {
  e.preventDefault();

  if (
    e.currentTarget.elements.email.value &&
    e.currentTarget.elements.message.value
  ) {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    e.currentTarget.reset();
  }
}
