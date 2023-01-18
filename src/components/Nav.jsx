import React, {useState} from 'react'
import { SlMenu } from 'react-icons/sl'



const Nav = ({categories}) => {
  const [shownav, setShownav] = useState(false);
  const navControl = () => {
    setShownav(!shownav);
  }
  return (
    <nav className={(shownav)? "navigation-bar-toggle navigation-bar" : "navigation-bar"}>
      <div className='navigation-head'>
        <span>Categories</span>
        <div></div>
        <SlMenu className="toggle-btn" onClick={navControl} />
      </div>
      <div className='nav'>
        {shownav &&
        <li>
          {
            categories.map((item, index) => {
              return (
                <li key={index}>
                  <br />
                  <a href={`#${item}`}>
                  {item}
                  </a>
                </li>
              )
            })
          }
        </li>
        }
      </div>
  </nav>
  )
}

export default Nav