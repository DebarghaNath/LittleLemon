import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <header>
        <nav className='navbar'>
            <img src={Logo} alt="Restaurant Logo"/>
            <ul>
                <li>
                    <Link to="/" className='nav-link'>About</Link>
                </li>
                <li>
                    <Link to="/booking" className='nav-link'>Booking</Link>
                </li>
                <li>
                    <Link to="/" className='nav-link'>Menu</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;
