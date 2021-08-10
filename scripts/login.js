const username = document.getElementById("username");
const password = document.getElementById("password");

const authentication = "https://abdul-malik-api.herokuapp.com/auth";

fetch(authentication, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ "username": username, "password": password })
}).then((res) => res.json())
  .then((res) => {
    console.log(res);
    myStorage = window.localStorage;
    console.log(res["access_token"]);
    myStorage.setItem("jwt-token", res["access_token"]);
  });
