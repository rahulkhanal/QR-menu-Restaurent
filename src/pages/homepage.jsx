import React, { useContext } from 'react'
import logo from './logopng.png';
import OfferSlider from '../components/offer';
import Nav from '../components/Nav';
import foodDta from '../components/data';
import '../index.css'
import Home from '../components/home';
import { cartContext } from '../components/store';

const categories = [...new Set(foodDta.map((item) => item.type))]
const HomePage = ({cart,setCart,isRendering,setIsRendering}) => {
  // const {cart, setCart}= useContext(cartContext);
  // console.log(cart)
  return (
    <div className='main'>
        <div className='logoMobile'>
            <img src={logo} alt="Pie Onion"/>
        </div>
        <hr />
        <OfferSlider />
        <br />

        <Nav categories={categories} />
        <hr/>
          <Home categories={categories} isRendering={isRendering} cart={cart} setIsRendering={setIsRendering} setCart={setCart}/>
    </div>
  )
}

export default HomePage