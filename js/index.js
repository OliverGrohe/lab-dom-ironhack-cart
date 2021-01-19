// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span")
  let quantity = product.querySelector(".quantity input")
  price = price.innerText
  quantity = quantity.value
  let subTotal = price * quantity
  let holdSubtotal = product.querySelector(".subtotal span")
  holdSubtotal = holdSubtotal.innerHTML = subTotal
  return holdSubtotal
} 

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const manyProducts = document.querySelectorAll('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sum = 0;
  const manyProducts = document.querySelectorAll('.product')
  manyProducts.forEach(e => {
  sum += updateSubtotal(e)
  })


  // ITERATION 3
  let total = document.querySelector("#total-value span")
  total.innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
});
