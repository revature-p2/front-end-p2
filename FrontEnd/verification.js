

function check(form) {
    document.getElementById
    if (form.username.value == "username" && form.password.value == "password" && form.email.value == "email") {
        window.open('app.html')
    }
    else {
        alert("Error: Incorrect/Missing Username, Password, or Email")
    }
};

function check(form) {
    if (form.username.value == "username" && form.password.value == "password") {
        window.open('app.html')
    }
    else {
        alert("Error: Incorrect/Missing Username or Password")
    }
};

