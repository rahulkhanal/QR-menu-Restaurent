import React from 'react'
import AdminSettings from './setting'

const CatagoryMange = () => {
  return (
    <div className='dash-container'>
      <div className='verticalMenu'>
        <AdminSettings />
      </div>
      <div className='dash catagoryManage'>
        <h1>Manage Me</h1>
      </div>
    </div>
  )
}

export default CatagoryMange