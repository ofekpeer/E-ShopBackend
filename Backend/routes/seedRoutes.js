import express from 'express';
import product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await product.deleteMany({});
  const createdProducts = await product.insertMany(data.products);

  res.send({createdProducts});
});

export default seedRouter;