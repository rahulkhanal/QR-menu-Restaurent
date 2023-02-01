import React from 'react'
import AdminSettings from './setting'

const SettingTheme = () => {
  return (
    <div className='dash-container'>
      <div className='verticalMenu'>
        <AdminSettings />
      </div>
      <div className='dash settingTheme'>
        <h1>Customize Your Theme</h1>
      </div>
    </div>
  )
}

export default SettingTheme