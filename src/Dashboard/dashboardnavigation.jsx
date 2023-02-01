import React from 'react'
import { Link } from 'react-router-dom'
import { TiCloudStorage } from 'react-icons/ti'
import { FiLogOut } from 'react-icons/fi'
import { IoBagAdd } from 'react-icons/io5'
import { GoDashboard } from 'react-icons/go'
import { IoIosSettings } from 'react-icons/io'
import AdminSettings from './Pages/setting'
import { IoNotifications } from 'react-icons/io5'
import { RiMenuFill } from 'react-icons/ri'
import { useState } from 'react'


const DashBoardNav = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }
  return (
    <div className='dashboardNav'>
      <div className="dashboard-NavIcon" onClick={toggleNavItems}>
        <button style={{ "backgroundColor": "#2D3A47", "border": "1px solid white", "color": "white", "borderRadius": "5px" }}>
          <RiMenuFill size={25} />
        </button>
      </div>
      <nav>
        <Link to="/admin/dashboard" className='dashboard-word'>Dashboard <GoDashboard size={20} /></Link>
        <div className={`${showNav ? 'nav-elementsactive' : 'nav-elements'}`}>
          <Link to='/admin/additem'>Add Item <IoBagAdd size={20} /></Link>
          <Link to='/admin/addeditem'>Added Item <TiCloudStorage size={20} /> </Link>
          <Link to='/admin/dashboard'>Notification<IoNotifications size={20} /> </Link>
          <Link to='/admin/setting'>Settings <IoIosSettings size={20} /> </Link>
          <Link to='/admin'>Sign out <FiLogOut size={20} /> </Link>
        </div>
      </nav>
    </div>
  )
}

export default DashBoardNav