let prod_url = "https://abdul-malik-api.herokuapp.com/api/show-products/";

let products = []
let plate = []

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
        <h3 class="price">${product.Price}</h3>
        <button onclick="addToPlate(${product.prod_list})">Add to Plate</button>
        </div>`;
      });
    });
}

showProducts(prod_url);


function addToPlate(prod_list){
  let product = products.find(item => {
    return item.prod_list == prod_list
  })
  console.log(product)
  plate.push(product);
  console.log(plate);
}

