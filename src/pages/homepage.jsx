import React, { useContext } from 'react'
import logo from './logopng.png';
import OfferSlider from '../components/offer';
import Nav from '../components/Nav';
import foodDta from '../components/data';
import '../index.css'
import Home from '../components/home';
import { cartContext } from '../components/store';
import { Link } from 'react-router-dom';

const categories = [...new Set(foodDta.map((item) => item.type))]
const HomePage = ({ cart, setCart }) => {
  return (
    <div className='main'>
      <div className='logoMobile'>
        <img src={logo} alt="Pie Onion" />
      </div>
      <div className='cart-navigation'>
        {/* <div>9</div> */}
        <Link to="/cart">
          <img src='./images/cartIcon.png' width="70px"/>
        </Link>
      </div>
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