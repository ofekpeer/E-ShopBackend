import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Container from 'react-bootstrap/Container';
import CartPage from './pages/CartPage';
import NavBarComponent from './Components/NavBarComponent';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allpage">
        <NavBarComponent />
        <main>
          <Container className="padding-top">
            <Routes>
              <Route path="/product/:token" element={<ProductPage />}></Route>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
