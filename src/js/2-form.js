const inputElem = document.querySelector('.feedback-form');

let formData = getFromLs('feedback-form-state') || { email: '', message: '' };

if (formData.email) inputElem.elements.email.value = formData.email;
if (formData.message) inputElem.elements.message.value = formData.message;

inputElem.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();

  formData.email = email;
  formData.message = message;

  saveToLs('feedback-form-state', formData);
});

inputElem.addEventListener('submit', e => {
  e.preventDefault();

  const email = inputElem.elements.email.value.trim();
  const message = inputElem.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  formData = { email, message };
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  inputElem.reset();
});


function saveToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLs(key, defaultValue) {
  const jsonData = localStorage.getItem(key);
  try {
    return JSON.parse(jsonData);
  } catch {
    return defaultValue || jsonData;
  }
}