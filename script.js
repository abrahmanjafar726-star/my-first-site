const box = document.getElementById("products");

fetch("https://fakestoreapi.com/products?limit=8")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    box.innerHTML = "";
    products.forEach(function (item) {
      box.innerHTML +=
        '' +
        '' +
        '' + item.title + '' +
        ' $' + item.price + '' +
        '';
    });
  })
  .catch(function () {
    box.textContent = "Could not load products.";
  });