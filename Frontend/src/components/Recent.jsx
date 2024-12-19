import { useState, useEffect } from 'react'
import Titlesection from './Titlesection'
import Product from './Product'

export const Recent = () => {
    // get products 
    const [recent, setRecent ] = useState([])

    const getRecent = async () => {
      const url = 'http://localhost:4000';
      const response = await fetch(`${url}/get-recent`);
      const data = await response.json()
      setRecent(data.latest)
    }
  
    useEffect(() => {
      getRecent()
    }, [])


  return (
    <div className="product">
          <Titlesection title="Recent Products"/>
          <hr />
          <div className="product-item">
            {recent.map((product) => (
                <Product id={product.id} image={product.image} old_price={product.old_price} 
                new_price={product.new_price} name={product.name}
                />
            ))}
          </div>
    </div>
  )
}