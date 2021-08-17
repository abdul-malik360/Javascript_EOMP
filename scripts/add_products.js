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
