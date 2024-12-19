import User from '../Models/userModel.js'
import jwt from "jsonwebtoken";
import validator from 'validator';

// signup - user 
const Signup = async (req, res) => {
    // form data collect 
    const { name, password, email } = req.body;

    if(!name || !password || !email) {
        return res.status(400).json({
            message: "All Fields is required"
        })
    }

    if(!validator.isEmail(email)) {
        return res.status(400).json({
            message: "Email is invalid"
        })
    }

    if(!validator.isStrongPassword(password)) {
        return res.status(400).json({
            message: "Password Must be Strong"
        })
    }

    // check user exist 
    const user = await User.findOne({ email: email })

    if(user) {
        return res.status(400).json({
            message: "User Already Exists"
        })
    }

    // default cart value 
    const cart = []

    for(let i = 0; i < 300; i++) {
        cart[i] = 0
    }

    // create user 
    const newUser = User.create({ name, password, email, cartData: cart})
    
    // auth user to get cartdata 
    const data = {
        user: {
            id: newUser._id
        }
    }

    const token = jwt.sign(data, "secret_token_key")
    res.status(201).json({
        token,
        message: "Created SuccessFully"
    })
}


// login - user 
const Login = async (req, res) => {
    // form data collect 
    const { password, email } = req.body;

    if(!email || !password) {
        return res.status(400).json({
            message: "All Fields is required"
        })
    }   

    // check user exist 
    const user = await User.findOne({ email: email })

    if(user) {
        const passwordCompare = password == user.password;

        if(passwordCompare) {
            // auth user to get cartdata 
            const data = {
                user: {
                    id: user._id
                }
            }

            const token = jwt.sign(data, "secret_token_key")
            res.status(201).json({
                token,
                user: user.email,
                message: "Login SuccessFully"
            })
        } else {
            return res.status(400).json({
                message: "Wrong Password"
            })
        }
    } else {
        return res.status(400).json({
            message: "This user is not Found"
        })
    }
}

export { Signup, Login }