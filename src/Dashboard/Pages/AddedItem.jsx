import React from 'react'
import { useState } from 'react'
import DashBoardNav from '../dashboardnavigation'
import foodDta from '../../components/data'
import { RiEditBoxFill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import { GrNext } from 'react-icons/gr'
import { BiSearchAlt } from 'react-icons/bi'

const AddedItem = () => {
  const [addedList, setAddedList] = useState({})
  return (
    <div style={{"marginTop":"4rem"}}>
      <DashBoardNav />
      <div className="search-in-dashboard">
        <button><BiSearchAlt size={20} />Filter</button>
        <input type='text' />
      </div>
      <div className='addedItem'>
        <table>
          <tr className='tableHead'>
            <th>SN</th>
            <th>Item Name</th>
            <th>Item Category</th>
            <th>Item Image</th>
            <th>Price</th>
            <th>
              Edit
            </th>
          </tr>
          {foodDta.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Food}</td>
                <td>{item.type}</td>
                <td>
                  <img src={item.image} />
                </td>
                <td>{item.price}</td>
                <td>
                  <RiEditBoxFill size={25} style={{ "color": "aliceblue" }} />
                  <AiFillDelete size={25} style={{ "color": "red" }} />
                </td>
              </tr>
            )
          })}
        </table>
        <button className='nextPage-btn'>
          <span>Next Page</span>
          <GrNext size={20}/>
        </button>

      </div>
    </div>
  )
}

export default AddedItem