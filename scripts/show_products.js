let prod_url = "https://abdul-malik-api.herokuapp.com/api/show-products/";

let products = [];
let plate = [];

function showProducts(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let products = data.data;

      let show = document.querySelector(".show_products");

      products.forEach((product) => {
        console.log(product);
        show.innerHTML += ` 
        <div class="prod_container">
        <h1 class="name"> <span class="prod_numb">${product.prod_list}.</span> ${product.Name}</h1>
        <img class="pic" src="${product.Picture}" alt="">
        <h2 class="type">${product.Type}</h2>
        <p class="description" >${product.Description}</p>
        <h3 class="price">R ${product.Price}</h3>
        <button class="platebtn" onclick="getProduct(${product.prod_list})">Add to Plate <i class="fas fa-utensils"></i></button>
        </div>`;
      });
    });
}

showProducts(prod_url);

function getProduct(id) {
  fetch(`https://abdul-malik-api.herokuapp.com/api/view-product/${id}`, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
      let name = `${product.Name}`;
      let picture = `${product.Picture}`;
      let type = `${product.Type}`;
      let description = `${product.Description}`;
      let price = `${product.Price}`;
      console.log(name);
      addToPlate(name, picture, type, description, price);
    });
}

function addToPlate(name, picture, type, description, price) {
  let platediv = document.createElement("div");
  platediv.classList.add("modal_plate");
  let plateItems = document.getElementsByClassName("plate_items")[0];
  let plateItemName = plateItems.getElementsByClassName("plate_item_name");
  for (let i = 0; i < plateItemName.length; i++) {
    if (plateItemName[i].innerText == name) {
      alert("You already added to your plate");
      return;
    }
  }
  let PlateContent = `<div> ${name} <img src="${picture}"> ${type} ${description} R ${price} </div>`;
  platediv.innerHTML = PlateContent;
  plateItems.append(platediv);
}
