import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET REQUEST':
      return { ...state, loading: true };
    case 'GET SUCCSESS':
      return { ...state, product: action.payload, loading: false };
    case 'GET FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductPage() {
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    product: [],
  });

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: 'GET REQUEST' });
      try {
        const res = await axios.get(`/api/v1/product/token/${token}`);
        dispatch({ type: 'GET SUCCSESS', payload: res.data });
      } catch (error) {
        dispatch({ type: 'GET FAIL', payload: error.massage });
      }
    };

    getProduct();
  }, [token]);

  return (
    <div>
        {loading ? (
          <p> loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <Row>
              <Col md={6}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-large"
                ></img>
              </Col>
              <Col md={3}>{product.name}</Col>
              <Col md={3}><button>Add to cart</button></Col>
            </Row>
          </div>
        )}
    </div>
  );
}
