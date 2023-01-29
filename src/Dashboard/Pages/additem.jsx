import React from 'react'
import { useState } from 'react'
import DashBoardNav from '../dashboardnavigation';
import foodDta from '../../components/data';

const Additem = () => {
    const [check, setCheck] = useState(false);
    const singleType = [...new Set(foodDta.map((item)=>item.type))]
    function handleCheckBox() {
        setCheck(!check);
    }
    return (
        <div className='additem'>
            <DashBoardNav />
            <br />
            <div className='dashboard'>
                <form>
                    <h5 for="itemName"> Item Name: </h5>
                    <input type='text' name="itemNAme" />
                    <br />
                    <br />
                    <h5 for="itemType"> Item Category: </h5>
                    <select>
                        {singleType.map((item, index)=>{
                            return <option>{item}</option>
                        })}
                    </select>
                    <br />
                    <br />
                    <h5 for="itemName"> Price: </h5>
                    <input type='number' name="price" />
                    <br />
                    <br />
                    <label for="file">Input Image</label>
                    <input type='file' name="file" style={{ "outline": "none" }} />
                    <br />
                    <br />
                    <hr></hr>
                    <div className='Offer'>
                        <div className='offerOnOff'>
                            <h5>Offer</h5>
                            <label className="switch">
                                <input type="checkbox" checked={check} onClick={handleCheckBox} />
                                <span className="slider round"><br /></span>
                            </label>
                        </div>
                        {check && <div>
                            <label for="offerPrice">Offer Price</label>
                            <input type='number' name="offerPrice" placeholder='Offer Price' />
                            <br />
                            <br />
                            <label for="offerdate">Offer Deadline</label>
                            <input type='time' name="offerdate" />
                        </div>}
                    </div>
                    <br />
                    <div className="dashboard-btn">
                        <button className='danger-btn'>Cancel</button>
                        <button className='green-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Additem