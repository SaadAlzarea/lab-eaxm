const apiUrl = "https://68219a2d259dad2655afc2ba.mockapi.io";
let loginBtn = document.getElementById("login-btn");

document.addEventListener("DOMContentLoaded", () => {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // get user value
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // git span
    let usernameS = document.getElementById("username-span");
    let passwordS = document.getElementById("password-span");

    // if valid
    let isValid = true;

    // validation

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

    if (password == "") {
      isValid = false;
      passwordS.innerText = "password is empty";
      passwordS.style.color = "red";
    } else if (password.length < 8) {
      isValid = false;
      passwordS.innerText = "password is shorter than 8";
      passwordS.style.color = "red";
    }

    if (isValid == false) {
      return;
    }
    console.log("im here ");
    
    async function get() {
      const res = await fetch(`${apiUrl}/register`);
      const data = await res.json();

      let user = data.find(
        (item) => password == item.password && username == item.username
      );

      if (user) {
        window.location.href = "../mainPage/mainPage.html";
      } else {
        usernameS.innerText = "username or password is not valid";
        usernameS.style.color = "red";
        passwordS.innerText = "username or password is not valid";
        passwordS.style.color = "red";
      }
    }
    get();
  });
});
