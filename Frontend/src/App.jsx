import Navbar from "./components/Navbar"
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import LoginSignup from "./pages/LoginSignup"
import ShopCatory from "./pages/ShopCatory"
import Cart from "./pages/Cart"
import { Footer } from "./components/Footer"
import Currentproduct from "./pages/Currentproduct"

function App() {
  const user = localStorage.getItem('auth-token');

  return (
    <>
    <Navbar user={user}/>
    <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>}/>
        <Route path="/clothes" element={user ? <ShopCatory category="clothes"/> : <Navigate to="/login"/>}/>
        <Route path="/shoes" element={user ? <ShopCatory category="shoes"/> : <Navigate to="/login"/>}/>
        <Route path="/jewellery" element={user ? <ShopCatory category="jewellery"/> : <Navigate to="/login"/>}/>
        <Route path="/jacket" element={user ? <ShopCatory category="jacket"/> : <Navigate to="/login"/>}/>
        <Route path="/product" element={user ? <Currentproduct /> : <Navigate to="/login"/>}>
          <Route path=":productId" element={user ?  <Currentproduct /> : <Navigate to='/login' />} />
        </Route>
        <Route path="/Login" element={user ? <Navigate to='/' /> : <LoginSignup />}/>
        <Route path="/cart" element={user ? <Cart /> :  <Navigate to='/login' />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
