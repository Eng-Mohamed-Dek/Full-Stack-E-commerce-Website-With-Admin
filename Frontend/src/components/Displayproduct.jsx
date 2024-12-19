import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const star = "/Frontend_Assets/star_icon.png";
const dull = "/Frontend_Assets/star_dull_icon.png";

export const Displayproduct = ({ product }) => {
  const { AddtoCart } = useContext(ShopContext)

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div>
          <img src={product.image} className='productdisplay-main-img' />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={dull} />
          <img src={dull} />
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => AddtoCart(product.id)}>Add To Cart</button>
        <div className="productdisplay-right-category">
          <span>Category : </span>{product.category}
        </div>
        <div className="productdisplay-right-category">
          <span>Tags : </span>Modern, Skiny, Latest
        </div>
      </div>
    </div>
  )
}
