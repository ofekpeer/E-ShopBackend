import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allpage">
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>EShop</NavBar.Brand>
              </LinkContainer>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:token" element={<ProductPage />}></Route>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>
            all right reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
