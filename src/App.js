import Footer from './components/footer';
import Dashboard from './Dashboard/dashboard';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/cart';
import HomePage from './pages/homepage';
import qrimg from '../src/pages/qr.png'
import PagenotFound from './pages/404';
import logo from '../src/pages/logopng.png';
import SingleOffer from './components/singleoffer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/offer' element={<SingleOffer/>}/>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
      <section className='max-size'>
        <img src={logo} className="logo" />
        <h1>Please scan the following QR code<br />to get menu</h1>
        <img src={qrimg} />
      </section>

      <Footer />
    </>
  );
}

export default App;
