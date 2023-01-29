import React from 'react'
import { Link } from 'react-router-dom'
import {TiCloudStorage} from 'react-icons/ti'
import {FiLogOut} from 'react-icons/fi'
import {IoBagAdd} from 'react-icons/io5'
import {GoDashboard} from 'react-icons/go'
import {IoIosSettings} from 'react-icons/io'
import AdminSettings from './Pages/setting'
import {IoNotifications} from 'react-icons/io5'

const DashBoardNav = () => {
  return (
    <div className='dashboardNav'>
        <nav>
            <Link to="/admin/dashboard">Dashboard <GoDashboard size={20}/></Link>
            <div>
                <Link to='/admin/additem'>Add Item <IoBagAdd size={20}/></Link>
                <Link to='/admin/addeditem'>Added Item <TiCloudStorage size={20}/> </Link>
                <Link to='/admin/settings'>Settings <IoIosSettings size={20}/> </Link>
                <Link to='/admin/dashboard'>Notification<IoNotifications size={20}/> </Link>
                <Link to='/admin'>Sign out <FiLogOut size={20}/> </Link>
            </div>
        </nav>
    </div>
  )
}

export default DashBoardNav