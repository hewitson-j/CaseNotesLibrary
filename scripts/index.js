const helpButton = document.querySelector("#help-button");
const loginButton = document.querySelector("#login-button");
const usernameField = document.querySelector("#username-field");
const passwordField = document.querySelector("#password-field");

helpButton.addEventListener("click", () => {
  alert(
    "Please input username and password.\n\nIf you do not know the username please contact your system administrator."
  );
});

loginButton.addEventListener("click", loginFunction);

function loginFunction() {
  let username = usernameField.value;
  const password = passwordField.value;

  //   alert(password);

  username = username.toUpperCase();

  if (username == "ADMIN_GSD" && password == "gsdadmin1234!") {
    alert("Welcome!");
    window.location.href = "Home.html";
    return;
  } else if (username == "" || password == "") {
    alert("Username or password not filled.\nPlease fill all fields.");
    return;
  } else {
    alert("Username or Password incorrect. \nPlease check and try again.");
    return;
  }
}
