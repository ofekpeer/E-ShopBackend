import express from 'express';
import data from './data.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './models/productModel.js';
import seedRouter from './routes/seedRoutes.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

//app.use('/api/v1/product/seed', seedRouter);

app.get('/api/v1/product/token/:token', async (req, res) => {
  const products = await Product.find();
  const product = products.find((i) => i.token === req.params.token);
  if (product) {
    res.send(product);
  } else res.status(404).send({ message: `${req.params.token} not found` });
});

app.get('/api/v1/products/:_id', async (req, res) => {
  const products = await Product.find();
  const product = products.find((i) => i._id == req.params._id);
  if (product) {
    res.send(product);
  } else res.status(404).send({ message: `${req.params.token} not found` });
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
