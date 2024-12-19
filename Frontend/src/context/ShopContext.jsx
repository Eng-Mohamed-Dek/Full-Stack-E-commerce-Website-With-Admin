import { useEffect } from 'react';
import { createContext, useState } from 'react'

//1- create context 
export const ShopContext = createContext(null)

// intial data 
const getDefault = () => {
  let cart = {}
  for(let index = 0; index < 300 + 1; index++) {
     cart[index] = 0;
  }
  return cart;  
}


//2- create function provider context value (all_products)
const ShopContextProvider = ({ children }) => {
  // get products 
  const [all_products, setAllProducts ] = useState([])
  const [cartItems, setCartItems] = useState(getDefault())

  const getAllProducts = async () => {
    const url = 'http://localhost:4000';
    const response = await fetch(`${url}/get-products`);
    const data = await response.json()
    setAllProducts(data.allproducts)
    if(localStorage.getItem('auth-token')) {
      await fetch('http://localhost:4000/getcart', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'auth-token' : `${localStorage.getItem('auth-token')}`
        },
        body: ""
      }).then((response) => response.json())
      .then((data) => setCartItems(data))
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])




  // Add to card 
  const AddtoCart = async (itemId) => {
    setCartItems((prevItems) => ({...prevItems, [itemId]:prevItems[itemId] + 1}))
    if(localStorage.getItem('auth-token')) {
      await fetch('http://localhost:4000/addcart', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'auth-token' : `${localStorage.getItem('auth-token')}`
        },
        body: JSON.stringify({ itemId: itemId })
      }).then((response) => response.json())
      .then((data) => console.log("added cart" , data))
    }
  }

  // remove cart 
  const removeCart = async (itemId) => {
    setCartItems((prevItems) => ({...prevItems, [itemId]:prevItems[itemId] - 1}))
    if(localStorage.getItem('auth-token')) {
      await fetch('http://localhost:4000/removecart', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'auth-token' : `${localStorage.getItem('auth-token')}`
        },
        body: JSON.stringify({ itemId: itemId })
      }).then((response) => response.json())
      .then((data) => console.log("removed cart" , data))
    }
  }

  // total cart 
  const totalCart = () => {
    let total = 0;
    for(const item in cartItems) {
      if(cartItems[item] > 0) {
        total += cartItems[item]
      }
    }
    return total
  }

  const total = totalCart();
    
  return (
    <ShopContext.Provider value={{ all_products, AddtoCart, cartItems, removeCart, total}}>
        { children }
    </ShopContext.Provider>
  )
}

export default ShopContextProvider