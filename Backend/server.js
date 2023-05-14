import express from 'express';
import data from './data.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './models/productModel.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/product/token/:token', async (req, res) => {
  console.log(req.params.token);
  const products = await Product.find();
  const product = products.find((i) => i.token === req.params.token);
  console.log(product.name);
  if (product) {
    res.send(product);
  } else res.status(404).send({ message: 'product not found' });
});

app.get('/api/v1/products', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
    app.listen(PORT, () => {
      console.log(`listening on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
