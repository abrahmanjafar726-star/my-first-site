const button = document.getElementById("offerBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Welcome! Today's offer is 10% off.";
});