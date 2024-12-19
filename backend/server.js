import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
import userRoutes from './routes/userRoutes.js'
import upload from './upload.js'
import Products from './Models/productModel.js'
import cartRoutes from './routes/cartRoutes.js'

const app = express();

// middlewares 
app.use(express.json())
app.use(cors());
app.use('/images', express.static('upload/images'))

// app routes 
app.use('/api/user', userRoutes)
app.use('/', cartRoutes)


// upload router 
app.post("/upload-image", upload.single('product'), (req, res) => {
    res.json({
        image: `http://localhost:4000/images/${req.file.filename}`
    })
})

// create product - CRUD
app.post('/create-product' , async (req, res) => {
    const allproducts = await Products.find({})
    const { name, image, category, new_price, old_price } = req.body;

    const product = await Products.create({ 
        id: allproducts.length + 1,
        name, image, category, new_price, old_price
    })

    res.json({
        image: image,
        Message: "Product Created"
    })
})

// read products - CRUD 
app.get('/get-products' , async (req, res) => {
    const allproducts = await Products.find({})
    res.json({ allproducts  })
})

// delete product - CRUD 
app.delete('/delete-product/:id' , async (req, res) => {
    const { id } = req.params;
    await Products.findByIdAndDelete(id)
    res.json({ Message: "Product Deleted" })
})


// get popuar in women 
app.get('/get-popular' , async (req, res) => {
    const allproducts = await Products.find({ category: "clothes" })
    let popular = allproducts.slice(0, 4)
    res.json({ popular })
})

// get recent products 
app.get('/get-recent', async (req, res) => {
    const allproducts = await Products.find()
    let latest = allproducts.slice(0).slice(-8)
    res.json({ latest })
})

// testing 
app.get('/get', (req, res) => {
    console.log(req.user)
    res.send("yeah")
})


let port = process.env.PORT

// connect to mongoDB 
mongoose.connect(process.env.MONGDB_URL)
    .then(() => {
        // app port 
        app.listen(port, () => {
            console.log(`on port http://localhost:${port} and DB is connected`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
