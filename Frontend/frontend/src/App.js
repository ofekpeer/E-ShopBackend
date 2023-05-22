import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { Nav } from 'react-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartPage from './pages/CartPage';
import CartIcon from './Components/CartIcon';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allpage">
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
                <CartIcon cart={cart}></CartIcon>
              </Nav>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container className="padding-top">
            <Routes>
              <Route path="/product/:token" element={<ProductPage />}></Route>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">all right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
