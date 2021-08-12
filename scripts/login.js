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

function login() {
  fetch(authentication, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      myStorage = window.localStorage;
      console.log(res["access_token"]);
      myStorage.setItem("jwt-token", res["access_token"]);
    });
}
