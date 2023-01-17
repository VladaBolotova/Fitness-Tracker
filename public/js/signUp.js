


const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstName').value.trim();
    const lastname = document.querySelector('#lastName').value.trim()
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (firstname && lastname && email && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler); 