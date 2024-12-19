import Users from '../Models/userModel.js'

const AddCart = async (req, res) => {
    const currentUser = await Users.findOne({ _id: req.user.id })
    currentUser.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: currentUser.cartData })
    res.json({
        message: "Cart Created SuccessFully"
    })
    // console.log(req.user.id, req.body)
}

// get cart 
const getCart = async (req, res) => {
    const currentUser = await Users.findOne({ _id: req.user.id })
    res.json(currentUser.cartData)
}

const removeCart = async (req, res) => {
    const currentUser = await Users.findOne({ _id: req.user.id })
    currentUser.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: currentUser.cartData })
    res.json({
        message: "Cart Created SuccessFully"
    })
    // console.log(req.user.id, req.body)
}



export { AddCart, getCart, removeCart }