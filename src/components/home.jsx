import React, { createContext, useContext, useRef, useState } from 'react'
import foodDta from './data'
import {IoIosAddCircle, IoIosAddCircleOutline} from 'react-icons/io'
import { cartContext } from './store'
import { cartAddContext } from './store'
import CartPage from '../pages/cart'
const Home = ({ categories,isRendering,setIsRendering, cart,setCart }) => {
    // const {cart, setCart} = useContext(cartContext);
    const abc = (item) =>{
        setIsRendering(!isRendering)
        setCart({
            id: item.id,
            Food: item.Food,
            type: item.type,
            image: item.image,
            price: item.price
            })
    }
    // console.log()
    return (
        <div className='home'>
            <h1><u>Our Menu</u></h1>
            <br />
            {categories.map((category) => {
                return (
                    <div id={category} >
                        <h4  style={{ "textAlign": "left"}}>{category}</h4>
                        <br />
                        <div className='align-cards'>
                            {foodDta.map((item) => {
                                if (category == item.type) {
                                    return (
                                        <div className='cards'>
                                            <div className="home-image">
                                                <div className='productImages'>
                                                    <img src={item.image} />
                                                    <span>{item.Food}</span>
                                                </div>
                                                <div className='productPrices'>
                                                    <span>{item.price}</span>
                                                    <button onClick={()=>{abc(item)}}><IoIosAddCircle size={24}/></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default Home