/* eslint-disable operator-linebreak */
// eslint-disable-next-line spaced-comment
/*eslint max-len: ["error", { "code": 250 }] */
const asyncHandler = require('express-async-handler');

const products = require('../model/products.js');

const getProducts = asyncHandler(async (req, res) => {
  const result = await products.getProducts();
  res.status(200).json(result);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const result = await products.deleteProduct(req.params.barcode);
  res.status(200).json(result);
});

const postProduct = asyncHandler(async (req, res) => {
  const { barcode, marke, produktname, beschreibung, ablaufdatum } = req.body;
  if (
    barcode == null ||
    marke == null ||
    produktname == null ||
    ablaufdatum == null ||
    beschreibung == null
  ) {
    res
      .status(404)
      .send('One or more properties missing: barcode, marke, produktname, beschreibung, ablaufdatum');
  } else {
    const result = await products.postProduct(req.body);
    res.status(200).json(result);
  }
});

module.exports = { getProducts, deleteProduct, postProduct };
