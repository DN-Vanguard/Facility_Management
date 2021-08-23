const editUserFormHandler = async (event) => {
    event.preventDefault();
    
    const user_id = document.querySelector('.edituser-form').getAttribute('user-id');
    const first_name = document.querySelector('#fname-useredit').value.trim();
    const last_name = document.querySelector('#lname-useredit').value.trim();
    const email = document.querySelector('#email-useredit').value.trim();
    const phone_number = document.querySelector('#pnumber-useredit').value.trim();
    const password = document.querySelector('#password-useredit').value.trim();
    const retypePW = document.querySelector('#retypePW-useredit').value.trim();
  
    if (password && retypePW && password !== retypePW) {
      return alert("Please check your password");
    } else if (password && retypePW && password === retypePW) {
      if (first_name && last_name && email && password) {
        const response = await fetch(`/api/users/${user_id}`, {
          method: 'PUT',
          body: JSON.stringify({ first_name, last_name, email, phone_number, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/users');
        } else {
          alert(response.statusText);
        }
      }
    } else {
      if (first_name && last_name && email) {
        const response = await fetch(`/api/users/${user_id}`, {
          method: 'PUT',
          body: JSON.stringify({ first_name, last_name, email, phone_number }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/users');
        } else {
          alert(response.statusText);
        }
      }
    }
  };
  
  document
    .querySelector('.edituser-form')
    .addEventListener('submit', editUserFormHandler);