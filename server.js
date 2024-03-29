import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/products/', productRoutes);
app.use('/api/v1/users/', userRoutes);
app.use('/api/v1/orders/', orderRoutes);

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
