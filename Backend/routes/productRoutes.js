import express from 'express';
import Product from '../models/productModel.js';

const productRoutes = express.Router();

productRoutes.get('/token/:token', async (req, res) => {
  const product = await Product.findOne({token: req.params.token});
  if (product) {
    res.send(product);
  } else res.status(404).send({ message: `${req.params.token} not found` });
});

productRoutes.get('/:_id', async (req, res) => {
  const product = await Product.findById(req.params._id);
  console.log(req.params._id);
  if (product) {
    res.send(product);
  } else res.status(404).send({ message: `${req.params.token} not found` });
});

productRoutes.get('/', async (req, res) => {
  res.send(await Product.find());
});

export default productRoutes;
