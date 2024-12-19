import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const drop_icon = "/Frontend_Assets/nav_dropdown.png";

const Navbar = ({ user }) => {
    const [menu, setMenu] = useState('Home')
    const { total }  = useContext(ShopContext)

    const menuRef = useRef()

    console.log(menuRef)

    const menuHide = (event) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        event.target.classList.toggle('open')
    }

    const Logout = () => {
        localStorage.removeItem('auth-token')
        window.location.reload()
    }

  return (
    <div className="navbar">
        <div className="logo">
            <img src="./logo.png" alt="" />
        </div>
        <img src={drop_icon} onClick={menuHide} alt="dropdown-icon" className="nav-dropdown"/>
        <ul className='nav-menu' ref={menuRef}>
            <li onClick={() => setMenu('Home')}> <Link to='/'>Home</Link> {menu == 'Home' && <hr />}</li>
            <li onClick={() => setMenu('clothes')}> <Link to='/clothes'>clothes</Link> {menu == 'clothes' && <hr />} </li>
            <li onClick={() => setMenu('shoes')}><Link to='/shoes'>shoes</Link>{menu == 'shoes' && <hr />}</li>
            <li onClick={() => setMenu('jewellery')}><Link to='/jewellery'>Jewellery</Link>{menu == 'jewellery' && <hr />}</li>
            <li onClick={() => setMenu('jacket')}><Link to='/jacket'>jacket</Link> {menu == 'jacket' && <hr />}</li>
        </ul>
        <div className='nav-login-cart'>
            <button onClick={Logout}><Link to='/login'>{user ? 'Logout' : 'Login' }</Link></button>
            <Link to='/cart'><img src="/Frontend_Assets/cart_icon.png" alt="cart-icon" /></Link>
            <p className='nav-cart-count'>{total}</p>
        </div>
    </div>
  )
}

export default Navbar