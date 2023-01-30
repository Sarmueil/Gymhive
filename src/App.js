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
import WomenCategory from './pages/WomenCategory';
import WomenProducts from './pages/WomenProducts';
import KidsCategory from './pages/KidsCategory';
import KidsProduct from './pages/KidsProduct';
import { StoreContextProviderContainer } from './contexts/StoreContext';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StoreContextProviderContainer>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="new" element={<NewProduct />} />
            <Route path="men" element={<MenCategory />} />
            <Route path="men/products" element={<MenProducts />} />
            <Route path="women" element={<WomenCategory />} />
            <Route path="women/products" element={<WomenProducts />} />
            <Route path="kids" element={<KidsCategory />} />
            <Route path="kids/products" element={<KidsProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreContextProviderContainer>
  );
}

export default App;
