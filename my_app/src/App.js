import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import DiscountCoupon from './components/DiscountCoupon';
import CartPage from './pages/CartPage/index';
import SaleProductsPage from './pages/SaleProductsPage'
import ProductDescrPage from './pages/ProductDescrPage';
import CategoryProductsPage from './pages/CategoryProductsPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <HomePage /> } />
          <Route path='categories' element={<CategoriesPage /> }  /> 
          <Route path='/' element={<DiscountCoupon /> }  /> 
          <Route path='cart' element={<CartPage /> }  /> 
          <Route path='products' element={<SaleProductsPage />} />
          <Route path='products/:id' element={<ProductDescrPage />} />
          <Route path='categories/:category' element={<CategoryProductsPage />} />
          </Route>
      </Routes>
     
    </div>
  );
}

export default App;
