import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="new" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
