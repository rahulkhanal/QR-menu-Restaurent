import React from 'react'
import { Link } from 'react-router-dom'

const PagenotFound = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <h1>Page Not Found</h1>
            <br />
            <br />
            <br />
            <Link to='/'>
                <button style={{ "backgroundColor": "#232323", "color": "white", "padding": "7px 28px" }}>
                    Go to Home
                </button>
            </Link>
            <hr />
        </div>
    )
}

export default PagenotFound