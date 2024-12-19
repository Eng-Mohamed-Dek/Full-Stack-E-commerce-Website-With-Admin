import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

const Cart = () => {
  const { all_products, cartItems, removeCart, totalAmount } = useContext(ShopContext)

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div>
                <div className="cartitems-format cartitems-format-main">
                  <img
                    src={product.image}
                    alt=""
                    className="carticon-product-icon"
                  />
                  <p>{product.name}</p>
                  <p>${product.new_price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[product.id]}
                  </button>
                  <p>${product.new_price * cartItems[product.id]}</p>
                  <img
                    src="./Frontend_Assets/cart_cross_icon.png"
                    alt=""
                    class="cartitems-remove-icon"
                    onClick={() => removeCart(product.id)}
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}

       <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${totalAmount}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart