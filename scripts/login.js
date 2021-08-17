// function to show and hide password
function show_password() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const authentication = "https://abdul-malik-api.herokuapp.com/auth";
const myStorage = window.localStorage;

function login() {
  fetch(authentication, {
    method: "POST",
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      myStorage = window.localStorage;
      myStorage.setItem("username", document.getElementById("username").value);
    });
}
