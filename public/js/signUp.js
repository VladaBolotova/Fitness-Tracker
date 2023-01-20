


const signupFormHandler = async (event) => {
    event.preventDefault();
  console.log('test');
    const first_name = document.querySelector('#firstName').value.trim();
    const last_name = document.querySelector('#lastName').value.trim()
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  console.log(first_name,last_name,email,password)
    if (first_name && last_name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ first_name,last_name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/login');
        console.log('Rgister success')
      } else {
        alert('Failed to sign up.');
      }
    // }
  };
}
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler); 