import React, { createContext, useContext } from 'react'
import {BsCheckLg} from 'react-icons/bs'
const alertContext = createContext();
const Alert = ({show, value, type}) => {
  return (
    <div className={`alertType-${type}`}>
        <BsCheckLg style={{"marginRight":"20px"}}/>
        {value}
    </div>
  )
}

export default Alert
export {alertContext}