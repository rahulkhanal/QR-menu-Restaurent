import React, { createContext, useContext, useRef, useState } from 'react'
import foodDta from './data'
import { IoIosAddCircle, IoIosAddCircleOutline } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './cartSlice'

const Home = ({ categories }) => {
    const [buttonClick, setButtonClick] = useState(false);
    const [getData,setGetData]=useState([]);
    const state = useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    const abc = (e,item) => {
        e.preventDefault();
        dispatch(addItem(item))
        console.log(state.cartItem.includes(item.id))
    }
    // console.log(getData)

if(getData){
    if(!state.cartItem.includes(getData.id)){
       dispatch(addItem(getData)) && console.log("Succcess")
    }
}
    return (
        <div className='home'>
            <h1><u>Our Menu</u></h1>
            <br />
            {categories.map((category, index) => {
                return (
                    <div id={category} key={index}>
                        <h4 style={{ "textAlign": "left" }}>{category}</h4>
                        <br />
                        <div className='align-cards'>
                            {foodDta.map((item) => {
                                if (category == item.type) {
                                    return (
                                        <div className='cards' key={item.id}>
                                            <div className="home-image">
                                                <div className='productImages'>
                                                    <img src={item.image} />
                                                    <span>{item.Food}</span>
                                                </div>
                                                <div className='productPrices'>
                                                    <span>{item.price}</span>
                                                    <button disabled={buttonClick} onClick={() => setGetData(item) }>{buttonClick ? "added" : <IoIosAddCircle size={24} />}</button>
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