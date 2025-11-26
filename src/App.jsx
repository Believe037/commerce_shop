// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CheckOut from './pages/CheckOut';
import OrdersPage from './pages/OrdersPage'


function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckOut />} />
      <Route path='orders' element={<OrdersPage />} />
    </Routes>
    
  )
}

export default App
