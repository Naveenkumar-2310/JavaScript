// DOM declaration
let result = document.getElementById("resultId");
let resetall = document.getElementsByClassName("reset");
// Const declaration
const products = {
  firstProduct: document.getElementById("firstItem"),
  secondProduct: document.getElementById("secondItem"),
  discount: document.getElementById("discountPrice"),
};
// Error declaration
const error = () => {
  if (
    !products.firstProduct.value ||
    !products.secondProduct.value ||
    !products.discount.value
  ) {
    alert("Please fill all required fields");
    return true;
  }
  return false;
};
// Main function
function operators() {
  if (error()) return;
  // Add the price of two products
  let addPrice =
    parseInt(products.firstProduct.value) +
    parseInt(products.secondProduct.value);

  //  Store the total price of the products in variable
  let discount = addPrice;

  // Logic for discount
  discount *= parseInt(products.discount.value);
  discount /= 100;
  let totalOfAmount = (addPrice -= discount);

  // Display result
  result.value = totalOfAmount;
}
// Reset function
function reset() {
  for (let i = 0; i < resetall.length; i++) {
    resetall[i].value = "";
  }
}
