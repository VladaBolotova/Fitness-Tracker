


const signupFormHandler = async (event) => {
    event.preventDefault();
// <<<<<<< HEAD
// <<<<<<< HEAD
  
//     const first_name = document.querySelector('#firstName').value.trim();
//     const last_name = document.querySelector('#lastName').value.trim()
// =======
//   console.log('test');
//     const firstname = document.querySelector('#firstName').value.trim();
//     const lastname = document.querySelector('#lastName').value.trim()
// >>>>>>> main
// =======
  console.log('test');
    const firstname = document.querySelector('#firstName').value.trim();
    const lastname = document.querySelector('#lastName').value.trim()
// >>>>>>> 393a8b29f6a6c037c50ddaea00e6f716a747d9de
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  console.log(first_name,last_name,email,password)
    // if (first_name && last_name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
// <<<<<<< HEAD
// <<<<<<< HEAD
//         body: JSON.stringify({
//            first_name: first_name, 
//            last_name: last_name, 
//            email: email, 
//            password: password }),
// =======
        body: JSON.stringify({ firstname,lastname, email, password }),
body: JSON.stringify({ firstname,lastname, email, password }),
// >>>>>>> 393a8b29f6a6c037c50ddaea00e6f716a747d9de
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