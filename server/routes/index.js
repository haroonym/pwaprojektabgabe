const express = require('express');
const asyncHandler = require('express-async-handler');
const webpush = require('web-push');
require('dotenv').config();

const { getProducts, deleteProduct, postProduct } = require('../controllers/products.js');

const router = express.Router();

const subscription = [];

router.get('/products', getProducts);
router.delete('/products/:barcode', deleteProduct);
router.post('/products', postProduct);

router.post(
  '/subscribe',
  asyncHandler(async (req, res) => {
    subscription.push(req.body);
    res.status(201).end();
  }),
);

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
webpush.setVapidDetails('mailto:younas.h03@htlwienwest.at', publicVapidKey, privateVapidKey);

router.post('/notify', (req, res) => {
  const payload = JSON.stringify({ title: 'iManager', body: req.body });
  for (const sub of subscription) {
    try {
      webpush.sendNotification(sub, payload);
    } catch (error) {
      console.error(error);
    }
  }
  res.status(200).end();
});

module.exports = router;
