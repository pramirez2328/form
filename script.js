const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('validationPassword');
console.log(username.value);

function checkingInput(inputArray) {

    inputArray.forEach(input => {

        console.log(input);

        if (input.value !== '') {
            input.className = 'success';
        } else {
            console.log(`this ${input.value} is not filled`);
        }
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkingInput([username, email, password, confirmPassword]);

});