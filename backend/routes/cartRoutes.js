import express from 'express'
const route = express.Router();
import { AddCart, getCart, removeCart} from '../Controllers/cartControllers.js';
import Auth from '../Auth.js'
 
// add cart
route.post('/addcart', Auth, AddCart)

//remove cart
route.post('/removecart', Auth, removeCart)

// get cart
route.post('/getcart', Auth, getCart)

export default route
