const logIn = $('.submitBtn');

logIn.on('click', function() {
    const email = $('#email').value;
    const password = $('#password').value;

    const user = {
        'email': email,
        'password': password
    };
});