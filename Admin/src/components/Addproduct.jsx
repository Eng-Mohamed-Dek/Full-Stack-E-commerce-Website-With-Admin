import React, { useState } from 'react'

const Addproduct = () => {
  const upload = './Admin_Assets/upload_cloud_icon.svg';

  // products data 
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: ""
  })

  console.log(productData)

  const handleProduct = (e) => {
    setProductData({...productData, [e.target.name]:e.target.value})
  }

  // image data 
  const [image, setImage] = useState(false)
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }
  
  const AddProducts = () => {
    const products = productData;
    const url = 'http://localhost:4000';
    let formData = new FormData();
    formData.append('product', image)

    const uploadData = async () => {

      const response = await fetch(`${url}/upload-image`, {
        method: "POST",
        headers: {
          Accept: 'application/json'
          
        },
        body: formData
      });

      const data = await response.json();

      if(response.ok) {
          products.image = data.image;
          const response = await fetch(`${url}/create-product`, {
            method: "POST",
            headers: {
              Accept: 'application/json',
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(products)
          })

          // clear form 
          setImage(false)
          setProductData({
            name: "",
            image: "",
            category: "",
            new_price: "",
            old_price: ""
          })
      }
    }
    uploadData()
  }
  
  return (
    <div className="add-product">
       <div className="addProduct-itemfield">
            <p>Product Title</p>
            <input name='name' type="text" onChange={handleProduct} placeholder='Product Name'  value={productData.name}/>
       </div>
       <div className="addproduct-price">
            <div className="addProduct-itemfield">
                  <p>Price</p>
                  <input type="text" name='old_price' placeholder='Enter old price' 
                  onChange={handleProduct}
                  value={productData.old_price}
                  />
            </div>
            <div className="addProduct-itemfield">
                  <p>Offer Price</p>
                  <input type="text" name='new_price' placeholder='Enter new price'
                  onChange={handleProduct}
                  value={productData.new_price}
                  />
            </div>
       </div>
       <div className="addProduct-itemfield">
            <p>Product Category</p>
            <select name="category" className='add-product-selector'
            onChange={handleProduct}
            value={productData.category}
            >
                <option value="clothes">clothes</option>
                <option value="shoes">shoes</option>
                <option value="jewellery">jewellery</option>
                <option value="jacket">jacket</option>
            </select>
       </div>
       <div className="addProduct-itemfield">
            <p>Add Product Image</p>
            <label htmlFor="file-input">
               <img src={image ? URL.createObjectURL(image) : upload} className='addproduct-thumnail-img'/>
            </label>
            <input hidden type="file" id='file-input' onChange={handleImage} />
       </div>
       <button type='submit' className='addproduct-btn' onClick={() => AddProducts()}>Add Product</button>
    </div>
  )
}

export default Addproduct