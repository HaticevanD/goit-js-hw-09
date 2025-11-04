const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

loadFormData();

form.addEventListener('input', onInputChange);
form.addEventListener('submit', onFormSubmit);

function onInputChange(event) {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);

      form.elements.email.value = parsedData.email || '';
      form.elements.message.value = parsedData.message || '';
    } catch (err) {
      console.error('Invalid JSON:', err);
    }
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.value.message.trim();

  if (!email || !message) {
    alert('Please fill in all blanks');
    return;
  }
  const submittedData = { email, message };

  console.log('Submitted data:', submittedData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
