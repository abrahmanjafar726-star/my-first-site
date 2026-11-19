const box = document.getElementById("products");

fetch("https://dummyjson.com/products?limit=8")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    box.innerHTML = "";
    data.products.forEach(function (item) {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = item.thumbnail;
      img.alt = item.title;
      img.onerror = function () {
        img.alt = "Picture not available";
      };

      const title = document.createElement("h3");
      title.textContent = item.title;

      const price = document.createElement("p");
      price.className = "price";
      price.textContent = "$" + item.price;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      box.appendChild(card);
    });
  })
  .catch(function () {
    box.textContent = "Could not load products.";
  });