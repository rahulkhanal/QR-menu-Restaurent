import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoChevronBackCircleSharp } from 'react-icons/io5'
import { AiFillDelete, AiFillMinusCircle } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
// import { addItem } from '../components/cartSlice';

const CartPage = () => {
  const data = useSelector((state) => state.cart);
  console.log(data);

  const [qty, setQty] = useState()
  function addQtyINcart(abc){
    setQty(abc);
  }
  function rmQtyINcart(abc){
    setQty(abc)
  }
  return (
    <div className='cart-menu'>
      <Link to="/">
        <div style={{ color: "white" }} className='backbutton'> <IoChevronBackCircleSharp size={32} /></div>
      </Link>
      <div>
        <br />
        <h2>Your Order</h2>
        <hr />
        {data.cartItem.map((item) => {
          let qtty = item.cartQuantity;
          const handelPlus =()=>{
            qtty=qtty+1;
            setQty(qtty);
          }
          const handelMinus =()=>{
            setQty(qtty);
          }
          return (
          <table>
            <tr id={item.id} className='cart-bill'>
              <td className='product'>
                <img src={item.image} alt={item.Food} />
                <h6>{item.Food}</h6>
              </td>
            <td className='Qty'>
                <p>{`Qty: ${qty}`}</p>
                < IoIosAddCircle size={25} onClick={handelPlus}/>
                < AiFillMinusCircle size={25} onClick={handelMinus}/>
              </td>
              <td className='price'>
                <span>{item.price}</span>
              </td>
              <td className='delete-item'>
                <AiFillDelete size={25} />
              </td>
            </tr>
          </table>
          )
        })}
        <div className='total-qty'></div>
        <button onClick={()=>alert("We are not ready")}>Order Here</button>
        <hr />
      </div>
    </div>
  )
}

export default CartPage