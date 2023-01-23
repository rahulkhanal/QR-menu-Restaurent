import React, { createContext, useContext, useRef, useState } from 'react'
import foodDta from './data'
import {IoIosAddCircle, IoIosAddCircleOutline} from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './cartSlice'
import store from './store'


const Home = ({ categories }) => {
    const [buttonClick, setButtonClick] = useState(false);

    const dispatch = useDispatch();
    const abc = (item) =>{
        dispatch(addItem(item));
        setButtonClick(true);
    }
    return (
        <div className='home'>
            <h1><u>Our Menu</u></h1>
            <br />
            {categories.map((category) => {
                return (
                    <div id={category} key={category.type}>
                        <h4  style={{ "textAlign": "left"}}>{category}</h4>
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
                                                    <button onClick={()=>{abc(item)}}>{buttonClick? "Added" : <IoIosAddCircle size={24}/>}</button>
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