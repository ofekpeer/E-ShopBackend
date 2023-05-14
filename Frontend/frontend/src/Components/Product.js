import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card className="product-card product">
      <Link to={`/product/${product.token}`}>
        <img
          className="card-img-top"
          alt={product.name}
          src={product.image}
        ></img>
      </Link>
      <div className="product-desc">
        <Card.Body>
          <Link to={`/product/${product.token}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating
            rating={product.rating}
            numOfReviews={product.numReviews}
          ></Rating>
          <Card.Text>{product.price}$</Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Product;
