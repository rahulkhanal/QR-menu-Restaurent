import Footer from './components/footer';
import Dashboard from './Dashboard/dashboard';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/cart';
import HomePage from './pages/homepage';
// import qrimg from '../src/pages/qr.png'
import PagenotFound from './pages/404';
// import logo from '../src/pages/logopng.png';
import SingleOffer from './components/singleoffer';
import Login from './Dashboard/Pages/login';
import Additem from './Dashboard/Pages/additem';
import AddedItem from './Dashboard/Pages/AddedItem';
import AdminSettings from './Dashboard/Pages/setting';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/offer' element={<SingleOffer/>}/>
          <Route path='/admin/additem' element={<Additem />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/addeditem" element={<AddedItem />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
