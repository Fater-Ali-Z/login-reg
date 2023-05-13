console.log("fater");
function confermPwd() {
  let pwd1 = document.getElementById("pwd1").value;
  let pwd2 = document.getElementById("pwd2").value;
  console.log(pwd1, pwd2);
  if (pwd1 === 123) {
    console.log("Valid");
  } else {
    console.log("not valid");
  }
}
