let user_url = "https://abdul-malik-api.herokuapp.com/api/show-users/";

function showUser(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let users = data.data;

      let show = document.querySelector(".show_user");

      users.forEach((user) => {
        console.log(user);
        show.innerHTML += ` 
        <div class="user_container">
        <h1 class="details">Username: <span class="pspan">${user[6]}</span></h1>
        <h2 class="details">Name: <span class="pspan">${user[1]} ${user[2]}</span> </h2>
        <h2 class="details">ID Number: <span class="pspan">${user[0]}</span></h2>
        <h2 class="details" >Email: <span class="pspan">${user[3]}</span></h2>
        <h2 class="details">Cell: <span class="pspan">${user[4]}</span></h2>
        <h2 class="details" >Address: <span class="pspan">${user[5]}</span></h2>
        </div>`;
      });
    });
}

showUser(user_url);