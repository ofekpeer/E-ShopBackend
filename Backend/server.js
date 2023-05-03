import express from 'express';
import data from './data.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/api/v1/products', (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
