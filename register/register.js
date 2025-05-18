const apiUrl = "https://68219a2d259dad2655afc2ba.mockapi.io";
let registerBtn = document.getElementById("register-btn");

document.addEventListener("DOMContentLoaded", () => {
  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // get user value
    let fullname = document.getElementById("fullname").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let conPassword = document.getElementById("conPassword").value.trim();

    // git span
    let fullnameS = document.getElementById("fullname-span");
    let usernameS = document.getElementById("username-span");
    let emailS = document.getElementById("email-span");
    let passwordS = document.getElementById("password-span");
    let conPasswordS = document.getElementById("conPassword-span");

    // if valid
    let isValid = true;

    // validation

    // fullname
    if (fullname == "") {
      isValid = false;
      fullnameS.innerText = "name is empty";
      fullnameS.style.color = "red";
    }

    // username
    if (username == "") {
      isValid = false;
      usernameS.innerText = "name is empty";
      usernameS.style.color = "red";
    } else if (username.includes("-")) {
      isValid = false;
      usernameS.innerText = "allow to user dash (-)";
      usernameS.style.color = "red";
    }

    // email
    if (email == "") {
      isValid = false;
      emailS.innerText = "email is empty";
      emailS.style.color = "red";
    } else if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      emailS.innerText = "this is invalid email, use (@, .)";
      emailS.style.color = "red";
    }

    if (password == "") {
      isValid = false;
      passwordS.innerText = "password is empty";
      passwordS.style.color = "red";
    } else if (password.length < 8) {
      isValid = false;
      passwordS.innerText = "password is shorter than 8";
      passwordS.style.color = "red";
    }

    if (conPassword == "") {
      isValid = false;
      conPasswordS.innerText = "confirm password is empty";
      conPasswordS.style.color = "red";
    } else if (password !== conPassword) {
      isValid = false;
      conPasswordS.innerText = "password and confirm password is not match";
      conPasswordS.style.color = "red";
    }
    if (isValid == false) {
      return;
    }
    const userInfo = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      conPassword: conPassword,
    };
    async function get() {
      const res = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(userInfo),
      });
    }
    get();

    if (isValid) {
      window.location.href = "../mainPage/mainPage.html";
    }
  });
});
