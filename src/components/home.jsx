import React, { createContext, useContext, useRef, useState } from 'react'
import foodDta from './data'
import { IoIosAddCircle, IoIosAddCircleOutline } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './cartSlice'

const Home = ({ categories }) => {
    const [disabledButtons, setDisabledButtons] = useState({});
    const data = useSelector((state) => state.cart)

    const dispatch = useDispatch();
    function func(e, item) {
        e.preventDefault();
        setDisabledButtons(prevState => ({ ...prevState, [item.id]: true }));
        dispatch(addItem(item));
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
                                                    <button onClick={(e) => func(e, item)} disabled={disabledButtons[item.id]}>
                                                        {disabledButtons[item.id] ? "Added !" : <IoIosAddCircle size={24} />}
                                                    </button>
                                                    {/* <button disabled={setButtonClick[item.id]} onClick={(e) => abc(e,item) }>{setButtonClick[item.id] ? "added" : <IoIosAddCircle size={24} />}</button> */}
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