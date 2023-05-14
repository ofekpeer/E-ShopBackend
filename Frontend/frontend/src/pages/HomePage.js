import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Components/Product';

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
          <Row>
            {products.map((product) => (
              <Col key={product.token} lg={4} md={6} sm={6} className='md-1'>
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomePage;
