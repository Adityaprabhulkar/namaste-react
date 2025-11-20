import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

const [btnNameReact, setBtnNameReact] = useState("Login")


useEffect(() => {
  console.log("useEffect Called");
},[btnNameReact]);

  return(
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
           <button 
           className="login"
           onClick={() => {
            btnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login");
           }}
            >
              {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  )
};


export default Header;