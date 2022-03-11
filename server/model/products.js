/* eslint-disable no-else-return */
/* eslint-disable eqeqeq */
let products = require('./products.json');

function getProducts() {
  return products;
}

function deleteProduct(barcode) {
  const delProd = products.find((el) => el.barcode == barcode);
  if (delProd) {
    products = products.filter((el) => el.barcode != barcode);
  }
  return `Product with the Barcode ${barcode} has been deleted`;
}

function postProduct(c) {
  const exists = products.find((el) => el.barcode == c.barcode);
  if (exists) {
    return `Product with the Barcode ${c.barcode} is already in the List!!!`;
  } else {
    products.push(c);
    return `Product with the Barcode ${c.barcode} has been added`;
  }
}

module.exports = { getProducts, deleteProduct, postProduct };
