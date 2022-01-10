const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

let usernameValue = '';
let passwordValue = '';

function submitForm() {
    console.log('USERNAME', usernameValue);
    console.log('PASSWORD', passwordValue);
    localStorage.setItem('username', usernameValue);
    localStorage.setItem('password', passwordValue);
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    // window.location.href = "file:///C:/Users/fatih/OneDrive/Desktop/Pharmacy%20ecommerce/index.html"

    if (usernameValue === username && passwordValue === password) {

        window.location.href = "file:///C:/Users/fatih/OneDrive/Desktop/Pharmacy%20ecommerce/index.html"

    }

}

usernameInput.addEventListener("change", handleUserNameChange);
passwordInput.addEventListener("change", handlePasswordChange);

function handleUserNameChange(event) {
    console.log("event", event.target.value);
    usernameValue = event.target.value;

}

function handlePasswordChange(event) {
    console.log("event", event.target.value);
    passwordValue = event.target.value;

}