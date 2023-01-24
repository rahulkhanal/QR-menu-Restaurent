import React, { useContext } from 'react'
import logo from './logopng.png';
import OfferSlider from '../components/offer';
import Nav from '../components/Nav';
import foodDta from '../components/data';
import '../index.css'
import Home from '../components/home';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const categories = [...new Set(foodDta.map((item) => item.type))]
const HomePage = ({ cart, setCart }) => {
  const data = useSelector((state) => state.cart);
  // console.log(data.CartTotalQuantity);
  return (
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
      <OfferSlider />
      <br />

      <Nav categories={categories} />
      <hr />
      <Home categories={categories} cart={cart} setCart={setCart} />
    </div>
  )
}

export default HomePage