const editEmployeeFormHandler = async (event) => {
  event.preventDefault();

  const employee_id = document.querySelector('.editemployee-form').getAttribute('employee-id');
  const first_name = document.querySelector('#fname-employeeedit').value.trim();
  const last_name = document.querySelector('#lname-employeeedit').value.trim();
  const phone_number = document.querySelector('#pnumber-employeeedit').value.trim();
  const email = document.querySelector('#email-employeeedit').value.trim();

  if (first_name && last_name && phone_number && email) {
    const response = await fetch(`/api/employees/${employee_id}`, {
      method: 'PUT',
      body: JSON.stringify({ first_name, last_name, phone_number, email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/employee-detail/${employee_id}`);
    } else {
      alert(response.statusText);
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();

  const del_id = document.querySelector('#delBtn').getAttribute('del-id');
  var confirmDel = confirm('Are you sure you want to delete this employee?');

  if (confirmDel) {
    if (del_id) {
      const response = await fetch(`/api/employees/${del_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace(`/employees`);
      } else {
        alert('Failed to delete this employee');
      }
    }
  }

};

document
  .querySelector('.editemployee-form')
  .addEventListener('submit', editEmployeeFormHandler);

document
  .querySelector('#delBtn')
  .addEventListener('click', (event) => {
    event.preventDefault();
    alert('Feature is upcoming.');
  });