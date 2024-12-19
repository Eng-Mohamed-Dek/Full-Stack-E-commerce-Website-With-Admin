import express from 'express'
const route = express.Router();
import { Signup, Login } from '../Controllers/userControllers.js'
 
// signup user
route.post('/signup', Signup)

// login user
route.post('/login', Login)

export default route
