function deleteProd() {
  let id = document.querySelector("#delete_prod").value;

  fetch(`https://abdul-malik-api.herokuapp.com/api/delete-product/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      window.location.reload();
    });
}
