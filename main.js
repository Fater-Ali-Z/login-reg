let pwd1 = document.getElementById("pwd1");
let pwd2 = document.getElementById("pwd2");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let age = document.getElementById("age");

let pwdValid = false;
let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let ageValid = false;

let nameReg = /^([a-zA-Z]){2,15}$/;
let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/;

function firstNameV() {
  if (nameReg.test(firstName.value)) {
    firstNameValid = true;
    document.getElementById("cnfrmFN").style.color = "green";
    document.getElementById("cnfrmFN").innerHTML = "Valid.";
  } else {
    firstNameValid = false;
    document.getElementById("cnfrmFN").innerHTML = "Invalid Name!";
    document.getElementById("cnfrmFN").style.color = "red";
    document.getElementById("cnfrmFN").style.opacity = 1;
  }
}
function lastNameV() {
  if (nameReg.test(lastName.value)) {
    lastNameValid = true;
    document.getElementById("cnfrmLN").style.color = "green";
    document.getElementById("cnfrmLN").innerHTML = "Valid.";
  } else {
    lastNameValid = false;
    document.getElementById("cnfrmLN").innerHTML = "Invalid Name!";
    document.getElementById("cnfrmLN").style.color = "red";
    document.getElementById("cnfrmLN").style.opacity = 1;
  }
}
function emailV() {
  if (emailReg.test(email.value)) {
    emailValid = true;
    document.getElementById("cnfrmEmail").style.color = "green";
    document.getElementById("cnfrmEmail").innerHTML = "Valid.";
  } else {
    emailValid = false;
    document.getElementById("cnfrmEmail").innerHTML = "Invalid Email!";
    document.getElementById("cnfrmEmail").style.color = "red";
    document.getElementById("cnfrmEmail").style.opacity = 1;
  }
}

function pwdV() {
  if (pwd1.value !== "" && pwd2.value !== "" && pwd2.value === pwd1.value) {
    pwdValid = true;
    document.getElementById("cnfrmPwd").innerHTML =
      '<i class="fa-solid fa-check  "></i>password matched!';
    document.getElementById("cnfrmPwd").style.color = "green";
  } else if (pwd2.value === "" || pwd1.value === "") {
    document.getElementById("cnfrmPwd").innerHTML =
      '<i class="fa-solid fa-circle-info"></i>password can not be empty';
    document.getElementById("cnfrmPwd").style.opacity = 1;
    document.getElementById("cnfrmPwd").style.color = "#007bff";
  } else if (pwd2.value !== pwd1.value) {
    document.getElementById("cnfrmPwd").innerHTML =
      '<i class="fa-solid fa-xmark"></i>password don\'t match';
    document.getElementById("cnfrmPwd").style.opacity = 1;
    document.getElementById("cnfrmPwd").style.color = "red";
  }
}
function ageV() {
  if (age.value >= 10 && age.value <= 70) {
    ageValid = true;
    document.getElementById("cnfrmAge").style.color = "green";
    document.getElementById("cnfrmAge").innerHTML = "Valid.";
  } else {
    ageValid = false;
    document.getElementById("cnfrmAge").innerHTML = "Invalid Age!";
    document.getElementById("cnfrmAge").style.color = "red";
    document.getElementById("cnfrmAge").style.opacity = 1;
  }
}

document.forms[0].onsubmit = function (e) {
  if (
    pwdValid === false ||
    firstNameValid === false ||
    lastNameValid === false ||
    ageValid === false ||
    emailValid === false ||
    document.getElementById("check").checked === false
  ) {
    e.preventDefault();
  } else {
   window.location.href = 'index.html'; 
  }
};
