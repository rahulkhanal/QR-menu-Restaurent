import React from 'react'
import AdminSettings from './setting'

const AdminManageAccount = () => {
  return (
    <div className='dash-container'>
      <div className="verticalMenu">
        <AdminSettings />
      </div>
      <div className='dash adminAccount'>
        <h1>Manage Accounts</h1>
      </div>
    </div>
  )
}

export default AdminManageAccount