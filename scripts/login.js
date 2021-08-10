const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

const authentication = "https://abdul-malik-api.herokuapp.com/auth";

fetch(authentication, {
  method: "POST",
  body: JSON.stringify({ username: username, password: password }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    myStorage = window.localStorage;
    console.log(res["access_token"]);
    myStorage.setItem("jwt-token", res["access_token"]);
  });
