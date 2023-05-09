import { Link } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET REQUEST':
      return { ...state, loading: true };
    case 'GET SUCCSESS':
      return { ...state, products: action.payload, loading: false };
    case 'GET FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    products: [],
  });

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: 'GET REQUEST' });
      try {
        const res = await axios.get('/api/v1/products');
        dispatch({ type: 'GET SUCCSESS', payload: res.data });
      } catch (error) {
        dispatch({ type: 'GET FAIL', payload: error.massage });
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {loading ? (
          <p> loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
