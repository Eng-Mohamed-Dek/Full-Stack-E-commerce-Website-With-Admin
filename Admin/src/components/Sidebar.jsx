import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const image1 = './Admin_Assets/Product_Cart.svg'
  const image2 = './Admin_Assets/Product_list_icon.svg'
  return (
    <div className='sidebar'>
      <Link to="/addproduct">
        <div className="sidebar-item">
          <img src={image1} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct">
      <div className="sidebar-item">
         <img src={image2} alt="" />
         <p>Product Lists</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar