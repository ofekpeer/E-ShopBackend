import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import { useContext, useRef } from 'react';
import { Store } from '../Store';
import axios from 'axios';

function Product({ product }) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const dragStart = (e) => {
    e.dataTransfer.setData('product', product._id);
  };

  const allowDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const addToCartHandler = async () => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/v1/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('sorry , product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'ADD TO CART',
      payload: { ...data, quantity },
    });
  };

  return (
    <Card className="product-card product">
      <Link to={`/product/${product.token}`}>
        <img
          onDragOver={(e) => allowDrop(e)}
          onDragStart={(e) => dragStart(e)}
          draggable
          className="card-img-top"
          alt={product.title}
          src={product.image}
        ></img>
      </Link>
      <div className="product-desc">
        <Card.Body>
          <Link to={`/product/${product.token}`}>
            <Card.Title>{product.title}</Card.Title>
          </Link>
          <Card.Text>{product.price}$</Card.Text>
          <Rating
            rating={product.rating.rate}
            numOfReviews={product.rating.count}
          ></Rating>
          {product.countInStock === 0 ? (
            <Button disabled variant="light">
              Out Of Stock
            </Button>
          ) : (
            <Button onClick={addToCartHandler}>Add to cart</Button>
          )}
        </Card.Body>
      </div>
    </Card>
  );
}

export default Product;
