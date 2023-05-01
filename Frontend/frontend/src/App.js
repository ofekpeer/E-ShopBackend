import React from 'react';
import './App.css';
import data from './data';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">E-Shop</a>
      </header>
      <main>
        <h1>Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.token} className='product'>
              <img alt={product.name} src={product.image}></img>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
