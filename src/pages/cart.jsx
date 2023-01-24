import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoChevronBackCircleSharp } from 'react-icons/io5'
import { AiFillDelete, AiFillMinusCircle } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { deleteItem } from '../components/cartSlice';
import tableQty from '../components/tableQty';
import { TiDelete } from 'react-icons/ti'
// import { addItem } from '../components/cartSlice';

const CartPage = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(data)
  const [showTable, setShowTable] = useState(false);
  const [qty, setQty] = useState(1)

  function handleOrder(e) {
    e.preventDefault();
    if (data.cartItem.length == 0) {
      alert("What to order Fool  😠 केही भएपो अर्डर गरने यार !!!")
    }
    else {
      setShowTable(!showTable);
    }
  }
  function handlePlus() {
    setQty(qty + 1)
  }
  function handleMinus() {
    // abc = abc+1;
    setQty(qty - 1)
    if (qty < 1) {
      setQty(1);
    }
  }
  function deletefromMenu(id) {
    dispatch(deleteItem(id));
    setShowTable(false);
    // data.CartTotalQuantity=0;
  }

  return (
    <div className='cart-menu'>
      <Link to="/">
        <div style={{ color: "white" }} className='backbutton'> <IoChevronBackCircleSharp size={32} /></div>
      </Link>
      <div>
        <br />
        <h2 className='order-title'>Your Order</h2>
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
                  < IoIosAddCircle size={25} color='rgb(197, 197, 7)' onClick={() => handlePlus(qty)} />
                  < AiFillMinusCircle size={25} color='rgb(197, 197, 7)' onClick={() => handleMinus(qty)} />
                </td>
                <td className='price'>
                  <span>{item.price}</span>
                </td>
                <td className='delete-item'>
                  <AiFillDelete size={35} color='rgb(240, 97, 97)' onClick={() => deletefromMenu(item.id)} />
                </td>
              </tr>
            </table>
          )
        })}
        <div className='total-qty'></div>
        <button onClick={(e) => handleOrder(e)}>Order Here</button>
        <hr />
        {
          showTable &&
          <div className={showTable ? 'showTableX showTableY' : 'showTableX'}>
            <form onSubmit={() => alert('lets welcome backend')}>
              <TiDelete size={32} color='#bb7b38' className='tidelete' onClick={() => setShowTable(!showTable)} />
              <label for="table">Enter Your table Number:</label>
              <hr />
              <select className="tableQty" name="table">
                {tableQty.map((tableNumber) => {
                  for (let i = 1; i < tableQty.length; i++) {
                    return (
                      <option value="volvo">{tableNumber}</option>
                    )
                  }
                })}
              </select>
              <hr />
              <button>Submit</button>
            </form>
          </div>
        }

      </div>
    </div>
  )
}

export default CartPage