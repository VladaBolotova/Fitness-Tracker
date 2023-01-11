const signUp = $('.submitBtn');

signUp.on('click', function() {
    const email = $('#email').value;
    const firstName = $('#firstName').value;
    const lastName = $('#lastName').value;
    const password = $('#password').value;

    const user = {
        'email': email,
        'firstName': firstName,
        'lasName': lastName,
        'password': password
    };
    console.log(user);
});