import React, { useState,  useEffect} from 'react'
import Titlesection from './Titlesection'
import Product from './Product'

const Popular = () => {
    // get products 
    const [popular, setPopular ] = useState([])

    const getPopular = async () => {
      const url = 'http://localhost:4000';
      const response = await fetch(`${url}/get-popular`);
      const data = await response.json()
      setPopular(data.popular)
    }
  
    useEffect(() => {
      getPopular()
    }, [])
  return (
    <div className="product">
          <Titlesection title="Popular In Clothes"/>
          <hr />
          <div className="product-item">
            {popular.map((product) => (
                    <Product id={product.id} image={product.image} old_price={product.old_price} 
                    new_price={product.new_price} name={product.name}
                    />
            ))}
          </div>
    </div>
  )
}

export default Popular