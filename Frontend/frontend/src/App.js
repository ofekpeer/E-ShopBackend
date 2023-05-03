import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">E-Shop</Link>
      </header>
      <main>
        <Routes>
          <Route path='/product/:token' element={<ProductPage/>}></Route>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
