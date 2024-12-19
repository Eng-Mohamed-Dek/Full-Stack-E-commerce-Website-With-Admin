import mongoose from 'mongoose'

const User = mongoose.model("users" , {
    name: {
        type: String,
    }, 
    email: {
        type: String,
        unique: true,
        required: true,
        // match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
        type: String,
        // minLength: 8,
        // maxLength: 16
    },
    cartData: {
        type: Object
    },
    data: {
        type: Date,
        default: Date.now
    }
})

export default User;
