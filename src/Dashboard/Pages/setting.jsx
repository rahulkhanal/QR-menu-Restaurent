import React from 'react'
import {BiCategory} from 'react-icons/bi'
import {MdInvertColors} from 'react-icons/md'
import {MdManageAccounts} from 'react-icons/md'
import DashBoardNav from '../dashboardnavigation'
const AdminSettings = () => {
    return (
      <div>
        <DashBoardNav />
        <div className='Dashboard-setting'>
          <div className='Dashboard-SettingBar'>
            <button><BiCategory size='25px'/>Manage Categories</button>
            <button><MdInvertColors size='25px'/>System Theme</button>
            <button><MdManageAccounts size='25px'/>Manage Account</button>
          </div>
          <div className='Setting-container'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur accusamus, dolores aliquam esse numquam quidem aperiam aspernatur, praesentium quo autem officiis at blanditiis eaque, eius nulla temporibus natus? Vel.lorem</p>
          </div>
        </div>
      </div>
    )
  }

export default AdminSettings
