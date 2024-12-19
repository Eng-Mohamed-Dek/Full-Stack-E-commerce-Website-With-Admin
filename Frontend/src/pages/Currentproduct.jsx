import React, { useContext } from 'react'
import { Displayproduct } from '../components/Displayproduct'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum.jsx'
import { ShopContext } from '../context/ShopContext.jsx'

const Currentproduct = () => {
  const { all_products } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_products.find((product) => product.id == Number(productId))

  return (
    <>
    <Breadcrum product={product}/>
    <Displayproduct productId={productId} product={product}/>
    </>
  )
}

export default Currentproduct