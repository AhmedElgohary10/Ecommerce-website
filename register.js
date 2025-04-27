/**notes:
 * add input validation
 * add button for new registeration / new account / forget this account
 * add remember me check box on login form
 * add styling when wrong data entered on login #done
*/

// let registerbtn = document.getElementById("registerbtn");
// let registerForm = document.getElementById("registerForm");
// let loginForm = document.getElementById("loginForm");

// let nameinp = document.getElementById("nameinp");
// let emailinp = document.getElementById("emailinp");
// let passwordinp = document.getElementById("passwordinp");
// let confirminp = document.getElementById("confirminp");

// let loginEmail = document.getElementById("loginEmail");
// let loginPass = document.getElementById("loginPass");

// function hide(element){
//     element.style.display = "none";
// }
// function showFlex(element){
//     element.style.display = "flex";
// }

// function checkHasAccount(){
//     if(localStorage.hasAccount == "true") return true;
//     else return false;
// }

// onload = function(){
//     console.log(`has account? ${checkHasAccount()}`);
//     if(checkHasAccount()){
//         showFlex(loginForm);
//         hide(registerForm);
//     }else{
//         hide(loginForm);
//         showFlex(registerForm);
//     }
// }

// function register(){
//     if(nameinp.value == "" || emailinp.value == "" || passwordinp.value == "" || confirminp.value == ""){
//         console.log("please enter all registeration data..")
//         return;
//     }
//     if(confirminp.value != passwordinp.value){
//         console.log("re enter password confirm...")
//     }else{
//         localStorage.password = passwordinp.value;
//         localStorage.name = nameinp.value;
//         localStorage.email = emailinp.value;
//         localStorage.hasAccount = "true";

//         console.log("registeration succeeded");
//         console.log(`has account? ${checkHasAccount()}`);
//         hide(registerForm);
//         showFlex(loginForm);
//     }
// }

// loginEmail.oninput = ()=>{
//     if(loginEmail.value == localStorage.email){
//         loginEmail.style.border = "2px solid green";
//     }else loginEmail.style.border = "1px solid red";
// };

// loginPass.oninput = function(){
//     if(loginPass.value == localStorage.password){
//         loginPass.style.border = "2px solid green";
//     }else loginPass.style.border = "1px solid red";
// }

// function login(){
//     if(loginEmail.value == localStorage.email && loginPass.value == localStorage.password){
//         hide(registerForm);
//         hide(loginForm);
//         console.log("login succeeded")
//         location.href = "./home.html";
//     }else{
//         console.log("incorrect login data..")
//     }
// }



//////////////
let registerbtn = document.getElementById("registerbtn");
let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

let nameinp = document.getElementById("nameinp");
let emailinp = document.getElementById("emailinp");
let passwordinp = document.getElementById("passwordinp");
let confirminp = document.getElementById("confirminp");

let loginEmail = document.getElementById("loginEmail");
let loginPass = document.getElementById("loginPass");

// Validation messages elements
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmError = document.getElementById("confirmError");

function hide(element) {
    element.style.display = "none";
}

function showFlex(element) {
    element.style.display = "flex";
}

function checkHasAccount() {
    return localStorage.hasAccount == "true";
}

// Validation functions
function validateName(name) {
    // Username should be 3-20 characters, letters and numbers only
    const regex = /^[a-zA-Z0-9]{3,20}$/;
    return regex.test(name);
}

function validateEmail(email) {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}

// Real-time validation handlers
nameinp.oninput = function() {
    if (validateName(nameinp.value)) {
        nameinp.style.border = "2px solid green";
        nameError.textContent = "";
    } else {
        nameinp.style.border = "1px solid red";
        nameError.textContent = "Username must be 3-20 alphanumeric characters";
    }
};

emailinp.oninput = function() {
    if (validateEmail(emailinp.value)) {
        emailinp.style.border = "2px solid green";
        emailError.textContent = "";
    } else {
        emailinp.style.border = "1px solid red";
        emailError.textContent = "Please enter a valid email address";
    }
};

passwordinp.oninput = function() {
    if (validatePassword(passwordinp.value)) {
        passwordinp.style.border = "2px solid green";
        passwordError.textContent = "";
    } else {
        passwordinp.style.border = "1px solid red";
        passwordError.textContent = "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number";
    }
    
    // Check password confirmation in real-time
    if (confirminp.value && passwordinp.value !== confirminp.value) {
        confirminp.style.border = "1px solid red";
        confirmError.textContent = "Passwords do not match";
    } else if (confirminp.value) {
        confirminp.style.border = "2px solid green";
        confirmError.textContent = "";
    }
};

confirminp.oninput = function() {
    if (passwordinp.value === confirminp.value) {
        confirminp.style.border = "2px solid green";
        confirmError.textContent = "";
    } else {
        confirminp.style.border = "1px solid red";
        confirmError.textContent = "Passwords do not match";
    }
};

onload = function() {
    console.log(`has account? ${checkHasAccount()}`);
    if (checkHasAccount()) {
        showFlex(loginForm);
        hide(registerForm);
    } else {
        hide(loginForm);
        showFlex(registerForm);
    }
}

function register() {
    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    let isValid = true;

    // Validate name
    if (nameinp.value === "") {
        nameError.textContent = "Username is required";
        nameinp.style.border = "1px solid red";
        isValid = false;
    } else if (!validateName(nameinp.value)) {
        nameError.textContent = "Username must be 3-20 alphanumeric characters";
        nameinp.style.border = "1px solid red";
        isValid = false;
    }

    // Validate email
    if (emailinp.value === "") {
        emailError.textContent = "Email is required";
        emailinp.style.border = "1px solid red";
        isValid = false;
    } else if (!validateEmail(emailinp.value)) {
        emailError.textContent = "Please enter a valid email address";
        emailinp.style.border = "1px solid red";
        isValid = false;
    }

    // Validate password
    if (passwordinp.value === "") {
        passwordError.textContent = "Password is required";
        passwordinp.style.border = "1px solid red";
        isValid = false;
    } else if (!validatePassword(passwordinp.value)) {
        passwordError.textContent = "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number";
        passwordinp.style.border = "1px solid red";
        isValid = false;
    }

    // Validate confirmation
    if (confirminp.value === "") {
        confirmError.textContent = "Please confirm your password";
        confirminp.style.border = "1px solid red";
        isValid = false;
    } else if (confirminp.value !== passwordinp.value) {
        confirmError.textContent = "Passwords do not match";
        confirminp.style.border = "1px solid red";
        isValid = false;
    }

    if (!isValid) {
        console.log("Please correct the errors in the form");
        return;
    }

    // If all validations pass
    localStorage.password = passwordinp.value;
    localStorage.name = nameinp.value;
    localStorage.email = emailinp.value;
    localStorage.hasAccount = "true";

    console.log("Registration succeeded");
    console.log(`has account? ${checkHasAccount()}`);
    hide(registerForm);
    showFlex(loginForm);
}

loginEmail.oninput = () => {
    if (loginEmail.value == localStorage.email) {
        loginEmail.style.border = "2px solid green";
    } else {
        loginEmail.style.border = "1px solid red";
    }
};

loginPass.oninput = function() {
    if (loginPass.value == localStorage.password) {
        loginPass.style.border = "2px solid green";
    } else {
        loginPass.style.border = "1px solid red";
    }
}

function login() {
    if (loginEmail.value == localStorage.email && loginPass.value == localStorage.password) {
        hide(registerForm);
        hide(loginForm);
        console.log("login succeeded");
        location.href = "./home.html";
    } else {
        console.log("incorrect login data..");
    }
}