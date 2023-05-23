import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { Nav } from 'react-bootstrap';
import CartIcon from './CartIcon';

export default function NavBarComponent() {
  return (
    <header>
    <NavBar className="sticky" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <NavBar.Brand>
            <img
              className="icon"
              src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
              alt="E-Shop"
            />
          </NavBar.Brand>
        </LinkContainer>
        <Nav className="ms-auto w-50 justify-content-end">
          <CartIcon></CartIcon>
        </Nav>
      </Container>
    </NavBar>
  </header>
  );
}
