import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { MdInvertColors } from 'react-icons/md'
import { MdManageAccounts } from 'react-icons/md'
import { Link } from 'react-router-dom'
import DashBoardNav from '../dashboardnavigation'
import {MdPolicy,MdAccountCircle} from 'react-icons/md'
import { RiMenuFill } from 'react-icons/ri'
import { useState } from 'react'
import {TiDelete} from 'react-icons/ti'


const AdminSettings = () => {
  const [showNav, setShowNav] = useState(false)
  const handleToggle = () => {
    setShowNav(!showNav);
  }
  return (
    <div>
      <DashBoardNav />
      <div className="Dashboard-setting">
        <div className={`${showNav ? "Dashboard-SettingBar-hide Dashboard-SettingBar":"Dashboard-SettingBar"}`}>
          <div className={`${showNav? 'setting-menuIcon-Hide': 'setting-menuIcon'}`} onClick={handleToggle}>
            {showNav ? <RiMenuFill size={30}/>: <TiDelete size={35} style={{"color":"red","marginRight":"10px"}}/>}
          </div>
          <div className="vertical-navlinks">
            <Link to='/admin/settings/manage-category'>
              <button><BiCategory size='25px' />Manage Categories</button>
            </Link>
            <Link to='/admin/settings/manage-theme'>
              <button><MdInvertColors size='25px' />System Theme</button>
            </Link>
            <Link to='/admin/settings/account-setting'>
              <button><MdAccountCircle size='25px' />Account Settings</button>
            </Link>
            <Link to='/admin/settings/manage-account'>
              <button><MdManageAccounts size='25px' />Other Account</button>
            </Link>
            <Link to='/admin/settings/policies'>
              <button><MdPolicy size='25px' />Company Policies</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings
