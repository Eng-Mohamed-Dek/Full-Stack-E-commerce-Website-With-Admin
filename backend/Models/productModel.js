import mongoose from 'mongoose'

const productShema = mongoose.model("Product", {
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        defult: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
})

export default productShema;
