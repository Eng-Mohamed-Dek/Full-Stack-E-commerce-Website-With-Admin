import { useContext } from 'react'
import Product from '../components/Product.jsx'
import { ShopContext } from '../context/ShopContext.jsx'

const ShopCatory = ({category}) => {
  const { all_products } = useContext(ShopContext)

  if(!all_products) return <h1>Loading</h1>
  return (
    <div className='product'>
       <h1>{category}</h1>
          <div className="product-item">
            {all_products?.map((product) => {
              if(category === product.category) {
                return (
                    <Product id={product.id} image={product.image} old_price={product.old_price} 
                    new_price={product.new_price} name={product.name}
                    />
                )
              } else {
                return null;
              }
            })}
          </div>
    </div>
  )
}

export default ShopCatory