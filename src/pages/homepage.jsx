import React, { useContext } from 'react'
import OfferSlider from '../components/offer';
import Nav from '../components/Nav';
import foodDta from '../components/data';
import '../index.css'
import Home from '../components/home';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './logopng.png'
import qrimg from './qr.png'
import Footer from '../components/footer';
import '../App.css'

const categories = [...new Set(foodDta.map((item) => item.type))]
const HomePage = ({ cart, setCart }) => {
  const data = useSelector((state) => state.cart);
  // console.log(data.CartTotalQuantity);
  return (
    <div>
      <section className='max-size'>
        <img src={logo} className="logo" />
        <h1>Please scan the following QR code<br />to get menu</h1>
        <img src={qrimg} />
      </section>
      <div className='main'>
        <div className='logoMobile'>
          <img src={logo} alt="Pie Onion" />
        </div>
        {data.CartTotalQuantity > 0 &&
          <>
            <div className='cart-navigation'>
              <div>{data.CartTotalQuantity}</div>
              <Link to="/cart">
                <img src='./images/cartIcon.png' width="70px" />
              </Link>
            </div>
          </>
        }
        <hr />
        {/* <OfferSlider /> */}
        <br />

        <Nav categories={categories} />
        <hr />
        <Home categories={categories} cart={cart} setCart={setCart} />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage