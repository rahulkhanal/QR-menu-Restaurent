import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/cart';
import HomePage from './pages/homepage';
import qrimg from '../src/pages/qr.png'
import { useState } from 'react';
import logo from '../src/pages/logopng.png'
import './App.css'
import store from './components/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
    {/* <Provider store = {store}> */}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/cart"  element={<CartPage/>} />
          </Routes>
      </BrowserRouter>
      {/* </Provider> */}
      {/* <CartPage cart={cart} isRendering={isRendering}/> */}
    <section className='max-size'>
        <img src={logo} className="logo"/>
        <h1>Please scan the following QR code<br />to get menu</h1>
        <img src={qrimg} />
    </section>
    
    <Footer />
    </>
  );
}

export default App;
