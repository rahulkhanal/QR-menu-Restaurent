import React from 'react'
import './dashboard.css'
import DashBoardNav from './dashboardnavigation'
import AddedItem from './Pages/AddedItem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/login'

const Dashboard = () => {

  return (
    <div>
      <div className="dashboardNav">
        <DashBoardNav />
      </div>

    </div>
  )
}

export default Dashboard