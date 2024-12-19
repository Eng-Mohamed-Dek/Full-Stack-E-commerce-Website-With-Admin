import React, { useEffect, useState } from 'react'

const Products = () => {
  // get products 
  const [allproducts, setAllProducts ] = useState([])

  const getAllProducts = async () => {
    const url = 'http://localhost:4000';
    const response = await fetch(`${url}/get-products`);
    const data = await response.json()
    setAllProducts(data.allproducts)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  if(!allproducts) return <h1 className='loading'>Products Loading...</h1>

  // delete product 
  const deleteProduct = async (id) => {
    const url = 'http://localhost:4000';
    await fetch(`${url}/delete-product/${id}`, {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
    })
    // window.location.reload()
  }

  return (
    <div className="list-product">
      <h1>All Products Lists</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        { allproducts.map((product) => (
          <div className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-person" />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img src="./Admin_Assets/cross_icon.png" alt="" className="listproduct-icon"
              onClick={() => deleteProduct(product._id)}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products