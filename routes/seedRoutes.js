import express from 'express';
import product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/UserModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await product.deleteMany({});
  const createdProducts = await product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts ,createdUsers});
});

export default seedRouter;
