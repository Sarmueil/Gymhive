import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';
import MenCategory from './pages/MenCategory';
import MenProducts from './pages/MenProducts';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="men" element={<MenCategory />} />
          <Route path="men/products" element={<MenProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
