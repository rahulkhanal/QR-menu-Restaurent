import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronBackCircleSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const SingleOffer = () => {
    const OfferData = useSelector((state)=> state.offer);
    // console.log(OfferData);
    return (
        <div>
            <br />
            <h4>Offer</h4>
            <div className='backbutton'>
                <Link to="/">
                    <IoChevronBackCircleSharp size={32} color='white' />
                </Link>
            </div>
            <hr />
            <div>
            </div>
        </div>
    )
}

export default SingleOffer