const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

const delButtonHandler = async (event) => {
    event.preventDefault();

    const del_id = document.querySelector('#delBtn').getAttribute('del-id');
    var confirmDel = confirm('Are you sure you want to delete your account?');

    if (confirmDel) {
        if (del_id) {
            const response = await fetch(`/api/users/${del_id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                logout();
            } else {
                alert('Failed to delete user');
            }
        }
    }

};

document
    .querySelector('#delBtn')
    .addEventListener('click', delButtonHandler);