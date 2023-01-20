


const signupFormHandler = async (event) => {
    event.preventDefault();
<<<<<<< HEAD
  
    const first_name = document.querySelector('#firstName').value.trim();
    const last_name = document.querySelector('#lastName').value.trim()
=======
  console.log('test');
    const firstname = document.querySelector('#firstName').value.trim();
    const lastname = document.querySelector('#lastName').value.trim()
>>>>>>> main
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  console.log(first_name,last_name,email,password)
    // if (first_name && last_name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
<<<<<<< HEAD
        body: JSON.stringify({
           first_name: first_name, 
           last_name: last_name, 
           email: email, 
           password: password }),
=======
        body: JSON.stringify({ firstname,lastname, email, password }),
>>>>>>> main
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    // }
  };
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler); 