// fetch('https://sheltered-earth-99321.herokuapp.com/auth', {
// //fetch('http:/localhost:5001/auth', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({"username": "thapelo", "password": "thapelo"})
// }).then(res => res.json())
//   .then(res => {
//             console.log(res);
//             myStorage = window.localStorage;
//             console.log(res["access_token"]);
//             myStorage.setItem("jwt-token", res["access_token"]);
// //              fetch('http://localhost:5001/create-blog/', {
//               fetch('https://sheltered-earth-99321.herokuapp.com/create-blog/', {
//               method: 'post',
//               headers: {
//                 "Authorization": jwt ${myStorage.getItem("jwt-token")},
//                 "Content-Type": "application/json"
//               },
//               body: JSON.stringify({"title": "New Blog Post 2 Title", "content": "New Blog Post 2 Content"})
//         })
//           .then(res => res.json())
//           .then(json => console.log(json));
//    });

function addProduct() {
  fetch(`https://abdul-malik-api.herokuapp.com/api/add-product/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: document.getElementById("name").value,
      Picture: document.querySelector(".convertedimage").src,
      Type: document.getElementById("type").value,
      Description: document.getElementById("decscription").value,
      Price: document.getElementById("price").value,
      Quantity: document.getElementById("quantity").value,
    }),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
      console.log("success");
      window.location.reload();
    });
}

function imageconvert() {
  const image = document.querySelector(".convertedimage");
  const file = document.querySelector("#picture").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      image.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
