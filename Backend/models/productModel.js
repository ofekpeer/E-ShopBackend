import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    category: { type: String, require: true },
    countInStock: { type: Number, require: true },
    token: { type: String, require: true },
    brand: { type: String, require: true },
    rating: { type: Number, require: true },
    numReviews: { type: Number, require: true },
  },
  { timestamp: true }
);
const Product = mongoose.model('product', productSchema);
export default Product;