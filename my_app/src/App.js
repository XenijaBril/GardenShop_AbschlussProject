import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import DiscountCoupon from './components/DiscountCoupon';
import CartPage from './pages/CartPage/index';
import ProductsPage from './pages/ProductsPage'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <HomePage /> } />
          <Route path='categories' element={<CategoriesPage /> }  /> 
          <Route path='/' element={<DiscountCoupon /> }  /> 
          <Route path='cart' element={<CartPage /> }  /> 
          <Route path='products' element={<ProductsPage />}/>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
