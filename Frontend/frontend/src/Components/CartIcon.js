import axios from 'axios';
import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

export default function CartIcon({ cart }) {

  const dragEnter = (e) => {
    e.preventDefault();
    const a = e.dataTransfer.getData('product');
    console.log(a);
    addToCartHandler(a)
  };
  
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === item);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/v1/products/${item}`);
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
    <Link to="/cart" className="nav-link">
      <i
        className="fas fa-shopping-cart"
        onDragOver={(event) => allowDrop(event)}
        onDrop={(e) => dragEnter(e)}
      ></i>
      {cart.cartItems.length > 0 && (
        <Badge pill bg="danger">
          {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
        </Badge>
      )}
    </Link>
  );
}
