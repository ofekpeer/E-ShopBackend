import express from 'express';
import data from './data.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get('/api/v1/products', (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
