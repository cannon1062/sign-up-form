const password = document.querySelector(".password-field input");
const passwordValidate = document.querySelector(".confirm-password-field input");
const errorMessage = document.querySelectorAll(".error-message");

password.addEventListener("input", () => {if (passwordValidate.value) {compare()}});
passwordValidate.addEventListener("input", () => compare());

function error() {
    password.classList.add("error");
    passwordValidate.classList.add("error");
    errorMessage[0].textContent = 'Passwords do not match';
    errorMessage[1].textContent = 'Passwords do not match';
    password.setCustomValidity("Passwords do not match");
    passwordValidate.setCustomValidity("Passwords do not match");
}

function allGood() {
    password.classList.remove("error");
    passwordValidate.classList.remove("error");
    errorMessage[0].textContent = '';
    errorMessage[1].textContent = '';
    password.setCustomValidity("");
    passwordValidate.setCustomValidity("");
}

function compare() {
    if (password.value === passwordValidate.value) {
        allGood();
    } else {
        error();
    }
}