var inputItems = document.getElementById("input-num");
var priceItems = document.getElementById("price-cart");
var unitPrice = 11.25; // Harga per unit
var subtotal = document.getElementById("price-sub");

document.getElementById("btn-add").addEventListener("click", function () {
  var value = parseInt(inputItems.value) + 1;
  inputItems.value = value;
  priceItems.innerHTML = value * unitPrice;
  console.log(priceItems);
  subtotal.innerHTML = `$${priceItems.innerText}`
});

document
  .getElementById("btn-subtract")
  .addEventListener("click", function () {
    var value = parseInt(inputItems.value) - 1;
    inputItems.value = value < 0 ? 0 : value;
    priceItems.innerHTML = inputItems.value * unitPrice;
  });
  document.getElementById("btn-clear").addEventListener("click", function () {
    inputItems.value = 0;
  priceItems.innerHTML = 0;
  });
  