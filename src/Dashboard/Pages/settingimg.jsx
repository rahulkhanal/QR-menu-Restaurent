import React from 'react'
import { FiSettings } from 'react-icons/fi'
import AdminSettings from './setting'


const SettingImg = () => {
    return (
        <div className='dash-container'>
            <div className='verticalMenu'>
                <AdminSettings />
            </div>
            <div className='dash catagoryManage'>
                <div className="rotateSetting-icon">
                    <FiSettings size={400} />
                </div>
            </div>
        </div>
    )
}

export default SettingImg