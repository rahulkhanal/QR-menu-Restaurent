import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/cart';
import HomePage from './pages/homepage';
import qrimg from '../src/pages/qr.png'
import { useState } from 'react';
import logo from '../src/pages/logopng.png'
import './App.css'

function App() {
  const[isRendering,setIsRendering]=useState(false)
  const [cart, setCart] = useState({
    id: 0,
    Food: "",
    type: "",
    image: "",
    price: "",
  });
  // console.log(cart)
  return (
    <>
      
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage isRendering={isRendering} cart={cart} setIsRendering={setIsRendering} setCart={setCart}/>}/>
              <Route path='/cart'  element={<CartPage {...cart} isRendering={isRendering}/>} />
          </Routes>
      </BrowserRouter>

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
