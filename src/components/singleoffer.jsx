import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronBackCircleSharp } from 'react-icons/io5'

const SingleOffer = () => {
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