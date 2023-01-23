import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoChevronBackCircleSharp } from 'react-icons/io5'
import { AiFillDelete, AiFillMinusCircle } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../components/cartSlice';
// import { addItem } from '../components/cartSlice';

const CartPage = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [qty, setQty] = useState(6)

  function handlePlus(){
  }
  function handleMinus(abc){
    // abc = abc+1;
    // setQty(abc)
  }
  function deletefromMenu(id){
    dispatch(deleteItem(id));
    // data.CartTotalQuantity=0;
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
          // setQty(qtty)
          return (
          <table>
            <tr id={item.id} className='cart-bill'>
              <td className='product'>
                <img src={item.image} alt={item.Food} />
                <h6>{item.Food}</h6>
              </td>
            <td className='Qty'>
                <p>{`Qty: ${qty}`}</p>
                < IoIosAddCircle size={25} color='green' onClick={()=>handlePlus(item.cartQuantity)}/>
                < AiFillMinusCircle size={25} color='green' onClick={()=>handleMinus}/>
              </td>
              <td className='price'>
                <span>{item.price}</span>
              </td>
              <td className='delete-item'>
                <AiFillDelete size={25} color='red' onClick={()=>deletefromMenu(item.id)}/>
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