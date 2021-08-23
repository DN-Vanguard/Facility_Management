const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#fname-signup').value.trim();
  const last_name = document.querySelector('#lname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const phone_number= document.querySelector('#pnumber-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (first_name && last_name && email && phone_number && password) {
    const response = await fetch('/api/users/insidejob', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, email, phone_number, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/users');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);