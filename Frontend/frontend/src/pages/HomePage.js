import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('/api/v1/products');
      setProduct(res.data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.token} className="product">
            <Link to={`/product/${product.token}`}>
              <img alt={product.name} src={product.image}></img>
            </Link>
            <div className="product-desc">
              <Link to={`/product/${product.token}`}>
                <p>{product.name}</p>
              </Link>
              <strong>{product.price}$</strong>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
