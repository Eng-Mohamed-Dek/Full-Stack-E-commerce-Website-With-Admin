import React from 'react'
import Addproduct from './Addproduct'
import Products from './Products'
import { Routes, Route } from 'react-router-dom' 
import Sidebar from './Sidebar'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/listproduct" element={<Products />} />
        </Routes>
    </div>
    
  )
}

export default Admin